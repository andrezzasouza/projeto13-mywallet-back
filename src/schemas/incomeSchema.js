import joi from 'joi';

const incomeSchema = joi.object({
    valor: joi.number().required(),
    description: joi.string().required(),
})

export default incomeSchema;