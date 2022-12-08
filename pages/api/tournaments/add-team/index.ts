import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../../lib/mongodb'

export default async function addTeamToTournament(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise
    const db = client.db(process.env.DATABASE)

    try {
        const { tournament_id, name, country, members } = req.body
        const newTeam = {
            _id: new ObjectId(),
            name,
            country,
            members,
            wins: 0,
            losses: 0,
            ties: 0,
            totalPoints: 0,
        }

        const { acknowledged, modifiedCount } = await db
            .collection('tournaments')
            .updateOne(
                { _id: new ObjectId(tournament_id) },
                { $push: { teams: newTeam } }
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
