import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }
    
    const [, token] =  authToken.split(" ");

    try {
        const { sub } = verify(token, "969fe8ed6f5af82599c0c5d6eb7f9856") as IPayload;

        request.user_id = sub;
        return next();
    } catch (err) {
        return response.status(404).end();
    }
}