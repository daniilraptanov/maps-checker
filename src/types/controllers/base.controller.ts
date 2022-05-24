import { NextFunction, Request, Response } from "express";

export interface IBaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<any>;
    createOrUpdate(req: Request, res: Response, next: NextFunction): Promise<any>;
    removeById(req: Request, res: Response, next: NextFunction): Promise<any>;
}