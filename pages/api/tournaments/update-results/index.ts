import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";
import { TTeam } from "../../../../types";

const updateResult = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    tournament_id,
    firstTeamId,
    secondTeamId,
    firstTeamScore,
    secondTeamScore,
  } = req.body;

  const client = await clientPromise;
  const db = client.db(process.env.DATABASE);

  try {
    // get tournament from db
    const tournament = await db
      .collection("tournaments")
      .findOne({ _id: new ObjectId(tournament_id) });

    const updatedTeams = tournament!.teams.map((team: TTeam) => {
      // update team one's score and stats
      if (team._id.toString() === firstTeamId) {
        team.results[secondTeamId] = `${firstTeamScore}-${secondTeamScore}`;
        if (firstTeamScore > secondTeamScore) {
          team.wins++;
          team.totalPoints += 3;
        } else if (firstTeamScore === secondTeamScore) {
          team.ties++;
          team.totalPoints += 1;
        } else {
          team.losses++;
        }
      }

      // update team two's score and stats
      if (team._id.toString() === secondTeamId) {
        team.results[firstTeamId] = `${secondTeamScore}-${firstTeamScore}`;
        if (secondTeamScore > firstTeamScore) {
          team.wins++;
          team.totalPoints += 3;
        } else if (secondTeamScore === firstTeamScore) {
          team.ties++;
          team.totalPoints += 1;
        } else {
          team.losses++;
        }
      }

      return team;
    });

    const { acknowledged, modifiedCount } = await db
      .collection("tournaments")
      .updateOne(
        { _id: new ObjectId(tournament_id) },
        { $set: { teams: updatedTeams } }
      );

    if (!acknowledged || modifiedCount === 0)
      return res.status(500).json({
        ok: false,
        status: 500,
        message: `[ ERROR ]: DB Error updating results`,
      });

    return res.status(200).json({
      ok: true,
      status: 200,
      message: `[ SUCCESS ]: Results updated`,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ ok: false, status: 500, message: `[ ERROR ]: ${error}` });
  }
};

export default updateResult;
