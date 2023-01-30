import { Request, Response } from "express";
import { Book, BookUpadate, Review, BodyReview } from "../protocols.js";
import { 
    getAllBooksService, 
    postNewBookService, 
    updateBookStartedService,
    updateBookFinishedService,
    getReviewService,
    deleteReviewService,
    deleteOneBookService,
    genreExistService,
    getAllGenresService,
    createReviewService,
    getReviewsService
 } from "../services/bookService/index.js";


export async function getAllBooks(req: Request, res: Response) : Promise<Response<Book>> {
    const { genre } = req.query;

    try {
        const books = await getAllBooksService(Number(genre)); 
        return res.status(200).send(books);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function postNewBook(req: Request, res: Response) : Promise<Response> {
    const bodyBook = res.locals.bodyBook as Book

    try {
        const genreExist = await genreExistService(bodyBook.genre);
        if(!genreExist){
            return res.status(404).send(genreExist);
        }
        await postNewBookService(bodyBook);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function bookStarted(req: Request, res: Response) : Promise<Response> {
    const { id }= req.params;
    const bodyUpdate = res.locals.bodyUpdate as BookUpadate;

    try {
        await updateBookStartedService(bodyUpdate, Number(id));
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function bookFinished(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params;
    const body = res.locals.body as Review;
    const bodyReview: BodyReview = {
        bookId: Number(id),
        iliked: body.iliked,
        abstract: body.abstract
    };

    try{
        await updateBookFinishedService(Number(id));
        await createReviewService(bodyReview);
        return res.sendStatus(201);
    } catch (error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteBook(req: Request, res: Response) : Promise<Response> {
    const { id } = req.params;

    try{
        const existReview = await getReviewService(Number(id));
        if(existReview){
            await deleteReviewService(existReview.id);
        }
        
        await deleteOneBookService(Number(id));
        return res.sendStatus(200);
    } catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getAllGenres(req: Request, res: Response) {
    try{
        const genres = await getAllGenresService();
        return res.status(200).send(genres);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getReviews(req: Request, res: Response) {
    try{
        const reviews = await getReviewsService();
        return res.status(200).send(reviews);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
}