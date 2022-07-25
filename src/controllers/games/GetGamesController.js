import { connection } from "../../database.js";

const GetGamesController = async (req, res) =>{
    try {
        const { name } = req.query;
        if(!name){
            const {rows: resultGames} = await connection.query(
                `
                SELECT games.*, categories.name FROM games
                JOIN categories
                ON games."categoryId" = categories.id
                `
            );
            return res.status(200).send(resultGames);
        }
        const {rows: resultGames} = await connection.query(
            `
            SELECT games.*, categories.name FROM games
            JOIN categories
            ON games."categoryId" = categories.id
            WHERE games.name = $1
            `,
            [name]
        );
        res.status(200).send(resultGames);
    }catch (err){
        console.log(err);
        res.sendStatus(500);
    }
};

export default GetGamesController;