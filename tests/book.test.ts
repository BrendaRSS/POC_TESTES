import prisma from "../src/configs/database";
import supertest from "supertest";
import app from "../src/app";

const api = supertest(app);

beforeAll( async () => {
    await prisma.book_review.deleteMany({});
    await prisma.books.deleteMany({});
    await prisma.genres.deleteMany({});
});

beforeEach( async () => {
    await prisma.book_review.deleteMany({});
    await prisma.books.deleteMany({});
    await prisma.genres.deleteMany({});
});

describe("POST /newBook", () => {
    it("should respond with status 401 when body is not valid", async () => {
        const response = await api.post("/newBook").send({
            author: "C.S. Lewis",
            title: "Título"
        });

        expect(response.status).toBe(401);
    });

    it("should respond with status 201 when body is valid", async () => {
        const genre = await prisma.genres.create({
            data:{
                genre: "saga"
            }
        });

        const body = {
            title:"As crônicas de Narnia",
            author: "C.S. Lewis",
            genre: genre.id,
            status:"not started",
        }

        const response = await api.post("/newBook").send(body);

        expect(response.status).toBe(201);
    });
});

describe("GET /allBooks", () => {
    it("should respond with status 200 and book list", async ()=> {
       const genre = await prisma.genres.create({
            data:{
                genre: "saga"
            }
        });
        const book = await prisma.books.create({
            data:{
                id: 5000,
                title: "As crônicas de Narnia",
                author:"C.S. Lewis",
                genreId: genre.id,
                status: "not started"
            }
        });
        const response = await api.get("/allBooks");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                id: book.id,
                title: book.title,
                author: book.author,
                genreId: genre.id,
                status: book.status,
                startedIn: book.startedIn,
                finishedIn: book.finishedIn,
                genres: {
                  id: genre.id,
                  genre: genre.genre
                }
              }
        ])
    });
});

describe("PATCH /bookStarted/:id", () => {
    it("should respond with status 401 when body is not valid", async () => {
        const response = await api.patch("/bookStarted/:id");

        expect(response.status).toBe(401);

    });

    it("should respond with status 201 when body is valid", async () => {
        const genre = await prisma.genres.create({
            data:{
                genre: "saga"
            }
        })
        const book = await prisma.books.create({
            data:{
                id: 5000,
                title: "As crônicas de Narnia",
                author:"C.S. Lewis",
                genreId: genre.id,
                status: "not started"
            }
        })

        const body = {
            status: "reading"
        }
        const response = await api.patch("/bookStarted/5000").send(body);

        expect(response.status).toBe(201);

    });
});

describe("PATCH /bookFinished/:id", () => {
    it("should respond with status 401 when body is not valid", async () => {
        const response = await api.patch("/bookFinished/:id");

        expect(response.status).toBe(401);

    });

    it("should respond with status 201 when body is valid", async () => {
        const genre = await prisma.genres.create({
            data:{
                genre: "saga"
            }
        })
        const book = await prisma.books.create({
            data:{
                id: 5000,
                title: "As crônicas de Narnia",
                author:"C.S. Lewis",
                genreId: genre.id,
                status: "not started"
            }
        })

        const body = {
            iliked: true,
            abstract: "Sem resumo"
        }
        const response = await api.patch("/bookFinished/5000").send(body);

        expect(response.status).toBe(201);

    });
});

describe("DELETE /deleteBook/:id", () => {
    it("should respond with status 200 when book deleted", async () => {
        const genre = await prisma.genres.create({
            data:{
                genre: "saga"
            }
        })
        const book = await prisma.books.create({
            data:{
                id: 5000,
                title: "As crônicas de Narnia",
                author:"C.S. Lewis",
                genreId: genre.id,
                status: "not started"
            }
        })
        const response = await api.delete("/deleteBook/5000")
    
        expect(response.status).toBe(200)
    });
});