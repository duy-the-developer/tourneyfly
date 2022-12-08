import { NextApiRequest, NextApiResponse } from 'next'

export default async function createTournament(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.json({ ok: true })
}
