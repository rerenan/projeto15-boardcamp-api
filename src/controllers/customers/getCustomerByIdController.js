import { connection } from "../../database.js";

const GetCustomerByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const {rows: resultCustomerById} = await connection.query(
            "SELECT * FROM customers WHERE id = $1",
            [id]
        );
        if(resultCustomerById.length === 0) return res.sendStatus(404);
        
        res.status(200).send(resultCustomerById);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

export default GetCustomerByIdController;