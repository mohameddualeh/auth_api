import express, { Router } from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

const PORT = 3002;

app.use(express.json());

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
