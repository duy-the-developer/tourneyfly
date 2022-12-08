import type { NextApiRequest, NextApiResponse } from 'next'

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    res.json({ ok: true, message: 'User created' })
}

export default createUser
