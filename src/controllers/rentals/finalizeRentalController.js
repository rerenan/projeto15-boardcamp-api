import { connection } from "../../database.js";

const FinalizeRentalController = async (req, res) =>{
    const {id} = req.params;
    try {
      const {rows: resultRentalById} = await connection.query(
        `SELECT * FROM rentals WHERE id = $1`, 
        [id]
        );
      
      if(!resultRentalById) return res.sendStatus(404);
      
      if(resultRentalById.returnDate) return res.sendStatus(400);
    
    const daysDifference = Math.floor((new Date().getTime() - new Date(resultRentalById.rentDate).getTime())/ (24 * 3600 * 1000));
    let delayFee = 0;
    if(daysDifference > resultRentalById.daysRented){
        const lateDays = daysDifference-resultRentalById.daysRented;
        delayFee = resultRentalById.pricePerDay*lateDays;
    }
    await connection.query(
        `UPDATE rentals
        SET "returnDate" = NOW() ,"delayFee" = $1
        WHERE id = $2`,
        [delayFee, id]
    );
     res.sendStatus(200);   
      
    } catch (error) {
      console.log(error);
      res.sendStatus(500); // internal server error
    }
}

export default FinalizeRentalController;