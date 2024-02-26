import express from "express";
import { addCoach, getCoaches, editCoach, deleteCoach } from "../controllers/coach.controller.js";

const coachRouter = express.Router();

/**
 * Agregar entrenador
 */

coachRouter.post("/coaches", addCoach);

/**
 * Obtener todos los entrenadores
 */
coachRouter.get("/coaches", getCoaches);

/**
 * Editar entrenador
 */
coachRouter.put("/edit-coache/:id", editCoach);

/**
 * Eliminar entrenador
 */
coachRouter.delete("/delete-coach/:id", deleteCoach);

export default coachRouter;
