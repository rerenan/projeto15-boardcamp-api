import { connection } from '../../database.js';

const GetCategoriesController = async (req,res) =>{
    try {
        const {rows: resultCategories} = await connection.query("SELECT * FROM categories");
        res.status(200).send(resultCategories);
    }catch (err){
        console.log(err);
        res.sendStatus(500);
    }
    
};

export default GetCategoriesController;

