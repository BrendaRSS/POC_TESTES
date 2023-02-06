import { Router } from "express";
import { 
    getAllBooks, 
    postNewBook, 
    bookStarted, 
    bookFinished, 
    deleteBook,
    getAllGenres,
    getReviews
} from "../controllers/booksControllers";
import { bookMiddleware } from "../middlewares/bookMiddleware";
import { updateBookMiddleware } from "../middlewares/updateBookMiddleware";
import { reviewBookMiddleware } from "../middlewares/finishedBookMiddleware";

const router = Router();

router.get("/allBooks", getAllBooks);

router.post("/newBook", bookMiddleware, postNewBook);

router.patch("/bookStarted/:id", updateBookMiddleware, bookStarted);

router.patch("/bookFinished/:id", reviewBookMiddleware, bookFinished);

router.delete("/deleteBook/:id", deleteBook);

router.get("/genres", getAllGenres);

router.get("/reviews", getReviews);

export default router;