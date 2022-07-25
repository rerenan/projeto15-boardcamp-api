import { connection } from "../../database.js";

const GetRentalsController = async (req, res) => {
    const {customerId, gameId} = req.query;
    let queryAdd = "";
    const values = [];
    try {
        if(customerId){
            values.push(customerId);
            queryAdd =+`'WHERE rentals."costumerId" = $${values.indexOf(customerId)+1}`;
        }
        if(gameId){
            values.push(gameId);
            queryAdd =+`'WHERE rentals."gameId" = $${values.indexOf(gameId)+1}`;
        }
        const { rows: rentalsResults } = await connection.query({
            text:
            `SELECT rentals.*, customers.name as "customerName", games.name as "gameName", games."categoryId", categories.name as "categoryName"
            FROM rentals
            JOIN customers
            ON customers.id = rentals."customerId"
            JOIN games
            ON games.id = rentals."gameId"
            JOIN categories
            ON games."categoryId" = categories.id;`,
            rowMode: "array"
    });
       const response =  rentalsResults.map(modelResult);

        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

function modelResult(i) {
    const [
        id,
        customerId,
        gameId,
        rentDate,
        daysRented,
        returnDate,
        originalPrice,
        delayFee,
        customerName,
        gameName,
        categoryId,
        categoryName
     ] = i;

    return {
        id,
        customerId,
        gameId,
        rentDate,
        daysRented,
        rentDate,
        returnDate,
        originalPrice,
        delayFee,
        customer: {
            id: customerId,
            name: customerName
        },
        game: {
            id: gameId,
            gameName,
            categoryId,
            categoryName
        }
    }
}

export default GetRentalsController;