import { ObjectId } from 'mongodb'
import clientPromise from './mongodb'

export const getTournamentById = async (_id: string) => {
    const client = await clientPromise
    const db = client.db(process.env.DATABASE)

    const tournament = await db
        .collection('tournaments')
        .findOne({ _id: new ObjectId(_id) })

    return tournament
}
