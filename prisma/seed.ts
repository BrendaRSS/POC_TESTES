import prisma from "../src/configs/database";

async function main() {
    await prisma.genres.createMany({
        data: [
            {
                "genre": "Fiction",
            },
            {
                "genre": "Nonfiction",
            },
            {
                "genre": "Horror",
            },
            {
                "genre": "Adventure",
            },
            {
                "genre": "Novel",
            },
            {
                "genre": "Detective",
            },
            {
                "genre": "Fantasy"
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registro feito com sucesso!")
})
.catch( e => {
    console.log(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect();
})