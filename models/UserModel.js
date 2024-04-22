import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: String,
    username: String,
    travels: Array
})

const Travels = model("travell-users", userSchema);
export default Travels;