import express from 'express';
import myBook from '../model/bookSchema';
const router = express.Router();

/* update book data */
router.put('/update/:id',(req,res)=> {
	myBook.findOneAndUpdate({
		_id:req.params.id
		},{$set:
			{Title:req.body.Title,
			Author:req.body.Author,
			Price:req.body.Price,
			Category:req.body.Category}},
			{upsert:'true'},(err,newBook)=> {
				if(err){
				console.log("error while updating book");
				res.send("error while updating book");
				} else {
				console.log(newBook);
				res.send(newBook);
			}
		})
})

module.exports = router;