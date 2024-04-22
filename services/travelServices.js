import Travels from "../models/UserModel.js";


export const getAllTravels = async (id) => {
    const user = await Travels.findById(id);
    console.log(user)
    return user
}