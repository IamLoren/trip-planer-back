import * as Services from '../services/travelServices.js';
import HttpError from "../helpers/HttpError.js";
import ctrWrapper from "../decorators/ctrWrapper.js";

 const getTravels = async (req, res) => {
    console.log(req.body)
    const _id = req.body;
    const user = await Services.getAllTravels(_id);
    if (!user) {
      throw HttpError(404, `User with id: [${_id}] not found`);
    }
    res.status(200).json(user);
}

const addTrip = async (req, res) => {
    console.log(req.body)
    const _id = req.body;
    const user = await Services.getAllTravels(_id);
    if (!user) {
      throw HttpError(404, `User with id: [${_id}] not found`);
    }
    res.status(200).json(user);
}

export default {
    getTravels: ctrWrapper(getTravels),
    addTrip: ctrWrapper(addTrip)
}