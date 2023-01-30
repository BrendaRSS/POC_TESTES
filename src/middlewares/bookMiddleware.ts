import { Request, Response, NextFunction } from "express";
import { BookSchema } from "../models/schemas.js";
import { Book } from "../protocols.js";

export async function bookMiddleware(req: Request, res: Response, next: NextFunction){
    const body = req.body as Book ;

    const {error} = BookSchema.validate(body, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(401).send(errors);
    }
    res.locals.bodyBook = body;
    next();
}