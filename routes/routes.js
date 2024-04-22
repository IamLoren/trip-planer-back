import express from 'express';
import  getTravels from '../controllers/controllers.js';

const travelRouter = express.Router();

travelRouter.get('/getUser', getTravels.getTravels);

travelRouter.patch('/addTrip', getTravels.addTrip);

export default travelRouter;