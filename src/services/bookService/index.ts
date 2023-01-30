import { Book, BookUpadate, BodyReview } from "../../protocols.js";
import {
    getAllBooksRepository, 
    postNewBookRepository, 
    updateBookStartedRepository, 
    updateBookFinishedRepository, 
    deleteOneBookRepository,
    genreExistRepository,
    getAllGenresRepository,
    createReviewRepository
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

export async function deleteOneBookService(id: number) {
    await deleteOneBookRepository(id);
}

export async function getAllGenresService() {
    const result = await getAllGenresRepository();

    return result;
}
