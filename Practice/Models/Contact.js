const {Schema, model} = require("../connection")

const ContactSchema = new Schema({
    "name" : "String",
    "phone" : "String",
    "email" : "String",
    "address" : "String",
    
});
 module.exports = model("contact", ContactSchema)