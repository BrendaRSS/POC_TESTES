import joi from "joi";

export const BookSchema = joi.object({
    title: joi.string().min(1).required(),
    author: joi.string().min(1).required(),
    genre: joi.number().required(),
    status: joi.string().required().valid("finished", "reading", "not started")
});

export const BookStartedSchema = joi.object({
    status: joi.string().required().valid("finished", "reading", "not started")
})

export const ReviewBookSchema = joi.object({
    iliked: joi.boolean().required(),
    abstract: joi.string().min(0)
})