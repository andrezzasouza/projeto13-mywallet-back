import incomeSchema from "../schemas/incomeSchema.js";

export function incomeSchemaValidation(req, res, next) {
  const income = req.body;
 
    const validation = incomeSchema.validate(income);
    if (validation.error) {
      return res.sendStatus(422);
    }

  next();
}