import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";

export default async function createTournament(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db(process.env.DATABASE);

  try {
    const { name, startDate, ownerEmail } = req.body;
    const newTournament = {
      name,
      startDate: new Date(startDate),
      teams: [],
      ownerEmail,
      createdAt: new Date(),
    };

    const insertResponse = await db
      .collection("tournaments")
      .insertOne(newTournament);

    console.log(
      `[ SUCCESS ]: New tournament created: ${insertResponse.insertedId}`
    );
    return res.json({ ok: true, data: insertResponse });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, status: 500 });
  }
}
