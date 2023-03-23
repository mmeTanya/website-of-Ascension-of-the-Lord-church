import { connectToDatabase } from '../../lib/mongodb'
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {

    let { db } = await connectToDatabase()
    const { id } = req.query;

    const post = await db.collection("sermons").findOne({
      _id: ObjectId(id),
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};