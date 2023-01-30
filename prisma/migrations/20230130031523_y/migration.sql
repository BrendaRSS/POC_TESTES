-- CreateTable
CREATE TABLE "book_review" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "iliked" BOOLEAN NOT NULL,
    "abstract" TEXT DEFAULT 'there is no summary',

    CONSTRAINT "book_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'not started',
    "startedIn" TIMESTAMP(6),
    "finishedIn" TIMESTAMP(6),

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_genre_key" ON "genres"("genre");

-- AddForeignKey
ALTER TABLE "book_review" ADD CONSTRAINT "book_review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
