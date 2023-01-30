import { Book, BookUpadate, BodyReview } from "../../protocols.js";
import {
    getAllBooksRepository, 
    postNewBookRepository, 
    updateBookStartedRepository, 
    updateBookFinishedRepository, 
    getReviewRepository,
    deleteReviewRepository,
    deleteOneBookRepository,
    genreExistRepository,
    getAllGenresRepository,
    createReviewRepository,
    getReviewsRepository
} from "../../repositories/bookRepositories.js";

export async function getAllBooksService(genre: number) {
    const books = await getAllBooksRepository(genre); 
    return books;
}

export async function genreExistService(genreId: number) {
    const genreExist = await genreExistRepository(genreId);

    return genreExist;
}

export async function postNewBookService(book: Book) {
    const books = await postNewBookRepository(book); 
    return books;
}

export async function updateBookStartedService(bodyUpdate: BookUpadate, id: number) {
    await updateBookStartedRepository(bodyUpdate, id);
}

export async function updateBookFinishedService(id: number) {
    await updateBookFinishedRepository(id)
}

export async function createReviewService(body: BodyReview)   {
    await createReviewRepository(body);
}

export async function getReviewService(id: number) {
    const result = await getReviewRepository(id);
    return result;
}

export async function deleteReviewService(id: number) {
    await deleteReviewRepository(id);
}

export async function deleteOneBookService(id: number) {
    await deleteOneBookRepository(id);
}

export async function getAllGenresService() {
    const result = await getAllGenresRepository();

    return result;
}

export async function getReviewsService() {
    const result = await getReviewsRepository();

    return result;
}
