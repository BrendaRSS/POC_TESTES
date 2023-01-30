export type Book = {
    title: string,
    author: string,
    genre: number,
    status: string,
    startedIn?: string,
    finishedIn?: string
}

export type BookUpadate ={
    status: string
}

export type Genre = {
    genre: number
}

export type Review = {
    iliked: boolean,
    abstract: string,
}

export type BodyReview = {
    bookId: number,
    iliked: boolean,
    abstract: string
}