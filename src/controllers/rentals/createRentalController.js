import { connection } from "../../database.js";
import rentalSchema from "../../Schemas/rentalSchema.js";

const CreateRentalController = async (req, res) =>{
    try {
        const {customerId, gameId, daysRented} = req.body;
        const {error} = rentalSchema.validate(req.body);
        if(error) return res.sendStatus(400);
        
        const {rows: customer} = await connection.query(
            `SELECT * FROM customers WHERE id = $1`,
            [customerId]
        );
        if(!customer.length) return res.sendStatus(400);

        const {rows: game} = await connection.query(
            `SELECT * FROM games WHERE id = $1`,
            [gameId]
        );
        if(!game.length) return res.sendStatus(400);

        const stockTotal = game[0].stockTotal;
        const {rows: usedGames} = await connection.query(
            `SELECT * FROM rentals WHERE "gameId" = $1`,
            [gameId]
        );
        if(stockTotal <= usedGames.length) return res.sendStatus(400);
        
        const originalPrice = daysRented*game[0].pricePerDay;
        const returnDate = null;
        const delayFee = null;
        

        await connection.query(
            `INSERT INTO rentals 
            ("customerId", "gameId", "daysRented", "rentDate", "originalPrice", "returnDate", "delayFee")
            VALUES ($1, $2, $3, NOW(), $4, $5, $6)`,
            [customerId, gameId, daysRented, originalPrice, returnDate, delayFee]
        );
        
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export default CreateRentalController;