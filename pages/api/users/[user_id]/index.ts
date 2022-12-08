import type { NextApiRequest, NextApiResponse } from "next";

const getUserById = (req: NextApiRequest, res: NextApiResponse) => {
  const { user_id } = req.query;
  res.json({ ok: true });
};

export default getUserById;
