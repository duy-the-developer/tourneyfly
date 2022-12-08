import { NextApiRequest, NextApiResponse } from "next";

const upsertUser = async (req: NextApiRequest, res: NextApiResponse) => {
  // check if user exists

  // if user exists, update user

  // if user does not exist, create user

  res.json({ ok: true, message: "User upserted" });
};

export default upsertUser;
