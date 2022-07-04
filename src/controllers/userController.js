import bcrypt from 'bcrypt';
import db from "../db.js";
import dayjs from 'dayjs';

export async function createUser(req, res) {
  const user = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    await db.collection("users").insertOne({...user,password:hashedPassword, incomes: []});

    res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function createIncome(req, res) {
  const income = req.body;
  const user = res.locals.user;

  try {
    const newIncome = {...income, type: "income", day: dayjs().format("DD/MM")}
    
    await db.collection("users").updateOne({_id: user._id},{$push: {incomes: newIncome}});
    res.sendStatus(201);
  }catch (error) {
    return res.sendStatus(500);
  }
}