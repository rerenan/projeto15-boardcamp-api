import { connection } from "../../database.js";

const GetCustomersController = async (req, res) =>{
    try {
        const {cpf} = req.query;
        if(cpf){
            const {rows: resultCustomers} = await connection.query(
                "SELECT * FROM customers WHERE cpf LIKE $1",
                [cpf + "%"]
            );
            return res.status(200).send(resultCustomers);
        }
        const {rows: resultCustomers} = await connection.query("SELECT * FROM customers");
        res.status(200).send(resultCustomers);
    }catch (err){
        console.log(err);
        res.sendStatus(500);
    }
    
};

export default GetCustomersController;