import pg from 'pg';
import { connection } from '../../database.js';

const GetCategoriesController = async (req,res) =>{
    const {rows: resultCategories} = await connection.query("SELECT * FROM categories");
    res.send(resultCategories);
};

export default GetCategoriesController;

