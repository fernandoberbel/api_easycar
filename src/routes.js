import { Router } from "express";
import controllerRide from "./controllers/controller.ride.js";

const router = Router();

router.get("/rides", controllerRide.List);

export default router;
