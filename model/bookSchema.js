import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/* book Schema as a collection */
let bookSchema = new Schema({
	Title : {type:'String',require:true},
	Price : 'Number',
	Author : 'String',
	Category : 'String'
},{versionKey:false})
let myBook = mongoose.model('Book',bookSchema);

module.exports = myBook;