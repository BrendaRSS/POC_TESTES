import { Request, Response, NextFunction } from "express";
import { BookStartedSchema } from "../models/schemas.js";
import { BookUpadate } from "../protocols.js";

export async function updateBookMiddleware(req: Request, res: Response, next: NextFunction){
    const body = req.body as BookUpadate;

    const {error} = BookStartedSchema.validate(body, {abortEarly: false});
    if(error){
        const errors: string[] = error.details.map((detail)=> detail.message);
        return res.status(401).send(errors);
    }

    res.locals.bodyUpdate = body;
    next();
}
