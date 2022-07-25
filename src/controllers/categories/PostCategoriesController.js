import { connection } from "../../database.js";
import categorySchema from "../../Schemas/categorySchema.js";

const PostCategoriesController = async (req, res) => {
    try {
        const { name } = req.body;

        const { error } = categorySchema.validate(req.body);
        if (error) return res.sendStatus(400);
        
        const { rows: alreadyExists } = await connection.query(
            "SELECT * FROM categories WHERE name=$1", 
            [name]
        );
        if (alreadyExists.length) return res.sendStatus(409);
        
        await connection.query(
            "INSERT INTO categories (name) VALUES ($1)", 
            [name]
        );

        res.sendStatus(200);

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
    }
}

export default PostCategoriesController;