import { Router } from "express";
import { 
    getAllBooks, 
    postNewBook, 
    bookStarted, 
    bookFinished, 
    deleteBook,
    getAllGenres
} from "../controllers/booksControllers.js";
import { bookMiddleware } from "../middlewares/bookMiddleware.js";
import { updateBookMiddleware } from "../middlewares/updateBookMiddleware.js";
import { reviewBookMiddleware } from "../middlewares/finishedBookMiddleware.js";

const router = Router();

router.get("/allBooks", getAllBooks);

router.post("/newBook", bookMiddleware, postNewBook);

router.patch("/bookStarted/:id", updateBookMiddleware, bookStarted);

router.patch("/bookFinished/:id", reviewBookMiddleware, bookFinished);

router.delete("/deleteBook/:id", deleteBook);

router.get("/genres", getAllGenres);

export default router;