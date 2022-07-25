import { connection } from "../../database.js";
import gameSchema from "../../Schemas/gameSchema.js";

const CreateGameController = async (req, res) =>{
try {
    const {
        name,
        image,
        stockTotal,
        categoryId,
        pricePerDay
    } = req.body;

    const { error } = gameSchema.validate(req.body);
    if (error) return res.sendStatus(400);

    const {rows: categoryExists} = await connection.query(`
        SELECT * FROM categories WHERE id = $1;
    `,[categoryId]);
    if(categoryExists.length === 0) return res.sendStatus(400);

    const {rows: gameAlreadyExists} = await connection.query(`
        SELECT * FROM games WHERE name = $1;
    `,[name]);
    if(gameAlreadyExists.length) return res.sendStatus(409);

    await connection.query(
        `INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") 
        VALUES ($1, $2, $3, $4, $5)`,
        [name, image, stockTotal, categoryId, pricePerDay]
    );
    res.sendStatus(201);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
};

export default CreateGameController;