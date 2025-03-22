import express from "express";
import { RegisterRoutes } from "../build/routes";

const app = express();

RegisterRoutes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});