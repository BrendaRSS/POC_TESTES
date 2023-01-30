# My_Book_List

your reading list in the control of your hand.

## About

my book list is a web application in which you can list the books you want to read and follow the beginning and end of those readings

## How to run for development

1. Clone this repository
2. Install all dependencies


```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Configure the `.env` file using the `.env.example` file

5. Run commands from `dump.sql` file

6. Run the back-end in a development environment:

```bash
npm run dev
```

## how to use routes

-> POST: /NewBook

- BODY: { "title": string, "author": string, "genre": number, "status": "not started" }

-> GET: /AllBooks?genre=5

-> PATCH: /BookStarted/:id

- BODY: { "status": "reading"}

-> PATCH: /BookFinished/:id

- BODY: { "iliked": true || false, "abstract": string }

-> DELETE: /DeleteBook/:id