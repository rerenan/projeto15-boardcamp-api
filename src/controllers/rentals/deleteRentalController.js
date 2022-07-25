import { connection } from "../../database.js";

const DeleteRentalController = async (req, res) =>{
    try {
        const {id} = req.params;
        const {rows: rentalById} = await connection.query(
            'SELECT * FROM rentals WHERE id = $1',
            [id]
        );
        if(!rentalById.length) return res.sendStatus(404);
        
        if(rentalById.returnDate === null) return res.sendStatus(400);

        await connection.query(
            'DELETE FROM rentals WHERE id = $1',
            [id]
        );
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
    const {id} = req.params;
}
export default DeleteRentalController;