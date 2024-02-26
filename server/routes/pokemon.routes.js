import express from "express";
import { getPokemons } from "../controllers/pokemon.controller.js";

const pokemonRouter = express.Router();

/**
 * Obtener todos los pokemons
 */

pokemonRouter.get("/pokemons", getPokemons);

export default pokemonRouter;
