import clientPromise from './mongodb'

export const getTournaments = async () => {
    const client = await clientPromise
    const db = client.db(process.env.DATABASE)

    const tournaments = await db
        .collection('tournaments')
        .find({})
        .sort({ startDate: -1 })
        .toArray()

    return tournaments
}
