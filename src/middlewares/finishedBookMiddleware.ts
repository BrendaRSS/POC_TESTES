import { Request, Response, NextFunction } from "express";
import { ReviewBookSchema } from "../models/schemas";
import { Review } from "../protocols";

export async function reviewBookMiddleware(req: Request, res: Response, next: NextFunction){
    const body = req.body as Review ;

    const {error} = ReviewBookSchema.validate(body, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(401).send(errors);
    }
    res.locals.body = body;
    next();
}