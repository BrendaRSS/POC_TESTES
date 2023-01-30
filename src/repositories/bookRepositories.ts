import prisma from "../configs/database.js";
import { Book, BookUpadate, BodyReview } from "../protocols.js";

export async function getAllBooksRepository(genre : number) {
   if(genre){
      return await prisma.books.findMany(
         {
            where: {
               genreId: genre, 
            },
            include:{
               genres: true,
            }
         }
      );
   } else {
      return await prisma.books.findMany({
         include:{
            genres: true,
         },
         orderBy: {
            id: "desc"
          }
      })
   }
}

export async function genreExistRepository(genreId: number) {
   return await prisma.genres.findFirst({
      where: {
         id: genreId
      }
   })
}

export async function postNewBookRepository(bodyBook : Book) : Promise<void>{
   await prisma.books.create({
      data: {
         title: bodyBook.title,
         author: bodyBook.author,
         genreId: bodyBook.genre,
         status: bodyBook.status,
      },
   }) 
}

export async function updateBookStartedRepository(bodyUpdate : BookUpadate, id: number) : Promise<void>{
   await prisma.books.update({
      where: {
         id: id,
       },
       data: {
         status: 'reading',
         startedIn: new Date()
       },
   }) 
}

export async function updateBookFinishedRepository(id : number) : Promise<void> {
   await prisma.books.update({
      where: {
         id: id,
       },
       data: {
         status: 'finished',
         finishedIn: new Date()
       },
   }) 
}

export async function createReviewRepository(body : BodyReview) {
   await prisma.book_review.create({
      data:{
         bookId: body.bookId,
         iliked: body.iliked,
         abstract: body.abstract,
      }
   })
}

export async function getReviewRepository(id: number) {
  return await prisma.book_review.findFirst({
      where:{
         bookId: id
      }
   })
}

export async function deleteReviewRepository(id: number) {
   await prisma.book_review.delete({
      where: {
         id: id
      }
   })
}

export async function deleteOneBookRepository(id : number) {
   await prisma.books.delete({
      where: {
         id: id,
       },
   })
}

export async function getAllGenresRepository() {
   return await prisma.genres.findMany();
}

export async function getReviewsRepository() {
   return await prisma.book_review.findMany();
}