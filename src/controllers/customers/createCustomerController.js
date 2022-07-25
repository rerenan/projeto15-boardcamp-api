import { connection } from "../../database.js";
import customerSchema from "../../Schemas/costumerSchema.js";

const CreateCustomerController = async (req, res) =>{
    try {
        const {name, phone, cpf, birthday} = req.body;
        const {error} = customerSchema.validate(req.body);
        if(error) return res.sendStatus(400);
        const {rows: customerAlreadyExists} = await connection.query(
            `SELECT * FROM customers WHERE cpf= $1;`,
            [cpf]
        );
        if(customerAlreadyExists.length) return res.sendStatus(409);

        await connection.query(
            `INSERT INTO customers (name, phone, cpf, birthday)
            VALUES ($1, $2, $3, $4)`,
            [name, phone, cpf, birthday]
        );
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
   
};

export default CreateCustomerController;