// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import cors from 'cors';

export const app = express();

const corsOptions = {
  origin: ['http://localhost:3001', 'https://cinema-buddy.netlify.app'],
  optionsSuccessStatus: 200
};

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use(cors(corsOptions));

RegisterRoutes(app);