import { NextFunction, Request, Response } from "express";

export interface IBaseValidate {
    validate(req: Request, res: Response, next: NextFunction): Promise<any>;
}