import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { teams } from '../../../../data.test'
import clientPromise from '../../../../lib/mongodb'
import { TTeam } from '../../../../types'

export default async function addTeamToTournament(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise
    const db = client.db(process.env.DATABASE)

    try {
        const { tournament_id, name, country, members } = req.body
        const newTeam: TTeam = {
            _id: new ObjectId(),
            name,
            country,
            members,
            wins: 0,
            losses: 0,
            ties: 0,
            totalPoints: 0,
            results: {},
        }

        // get tournament data
        const tournament = await db
            .collection('tournaments')
            .findOne({ _id: new ObjectId(tournament_id) })

        // add existing teams to results array
        tournament!.teams.forEach(
            (team: TTeam) => (newTeam.results[team._id.toString()] = '')
        )

        // add this team to all other teams results array
        const updatedTeams = tournament!.teams.map((team: TTeam) => ({
            ...team,
            results: { ...team.results, [newTeam._id.toString()]: '' },
        }))

        updatedTeams.push(newTeam)

        const { acknowledged, modifiedCount } = await db
            .collection('tournaments')
            .updateOne(
                { _id: new ObjectId(tournament_id) },
                { $set: { teams: updatedTeams } }
            )

        if (!acknowledged || modifiedCount === 0)
            return res.status(500).json({
                ok: false,
                status: 500,
                message: `[ ERROR ]: DB Error adding new team`,
            })

        console.log(
            `[ SUCCESS ]: New team added to tournament ${tournament_id}`
        )
        return res.json({ ok: true })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, status: 500 })
    }
}
