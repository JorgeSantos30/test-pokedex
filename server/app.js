import express from "express";
import pokemonRouter from "./routes/pokemon.routes.js";
import cors from "cors";
import coachRouter from "./routes/coach.routes.js";

const app = express();

//MIDDLEWARE
app.use(express.json());

// const whiteList = [process.env.ORIGIN_1]

app.use(cors());

//routes
app.use("/api/v1", pokemonRouter, coachRouter);

export default app;
