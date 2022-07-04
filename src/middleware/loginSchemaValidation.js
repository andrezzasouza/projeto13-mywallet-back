import loginSchema from "../schemas/loginSchema.js";

export function loginSchemaValidation(req, res, next) {
  const login = req.body;
 
    const validation = loginSchema.validate(login);
    if (validation.error) {
      return res.sendStatus(422);
    }

  next();
}