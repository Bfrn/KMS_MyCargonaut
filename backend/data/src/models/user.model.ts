/**
 * DB schemes
 * used to define the schemes for server and DB communication.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema({
   username: {type: String, required: true},
   password: {type: String, required: true},
   birthdate: {type: Date, required: true},
   cellPhoneNumber: {type: Number, required: false},
   imgUrl: {type: String, required: false},
   bio: {type:String,required: true},           
   street: {type: String, required: true},      //Straße
   houseNumber: {type: String, required: true}, //Hausnummer
   zip: {type: Number, required: true},         //PLZ
   city: {type: String, required: true}         //Ort
})

// Export the User model
module.exports = mongoose.model('User', userSchema)
