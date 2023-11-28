const {Schema, model} = require("../connection")

const UserSchema = new Schema({
    "name" : "String",
    "age" : "String",
    "email" : "String",
    
});
 module.exports = model("user", UserSchema)