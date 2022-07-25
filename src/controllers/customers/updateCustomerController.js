import { connection } from "../../database.js";
import customerSchema from "../../Schemas/costumerSchema.js";

const UpdateCustomerController = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, phone, cpf, birthday} = req.body;
        
        const {error} = customerSchema.validate(req.body);
        if(error) return res.sendStatus(400);
    
        const {rows: customerAlreadyExists} = await connection.query(
            `SELECT * FROM customers WHERE cpf= $1;`,
            [cpf]
        );
        if(customerAlreadyExists.length < 1) return res.sendStatus(409);
        
        await connection.query(
            `UPDATE customers 
            SET name = $1, phone = $2, cpf = $3, birthday = $4
            WHERE id = $5`,
            [name, phone, cpf, birthday, id]
        );
        
        res.sendStatus(200);
    
    } catch (err) {
        
        console.log(err);
        res.sendStatus(500);
    }
};

export default UpdateCustomerController;