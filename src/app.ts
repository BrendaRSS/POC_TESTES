import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import booksRoutes from "./routes/booksRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(booksRoutes);

app.get("/health", (req: Request, res : Response)=> {
    return res.send("Tudo ok!")
});

const port = process.env.PORT
app.listen(port, () => console.log(`Server running in port ${port}`))
