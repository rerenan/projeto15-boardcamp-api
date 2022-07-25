import joi from 'joi';
const cpfValidation = new RegExp('[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}');

const customerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().min(10).max(11).required(),
    cpf: joi.string().pattern(cpfValidation).required(),
    birthday: joi.string().isoDate()
}); 

export default customerSchema;