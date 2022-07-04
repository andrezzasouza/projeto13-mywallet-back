import bcrypt from 'bcrypt';
import db from "../db.js";

export async function createUser(req, res) {
  const user = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    await db.collection("users").insertOne({...user,password:hashedPassword});

    res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }

}