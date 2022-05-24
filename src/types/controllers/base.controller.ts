import { NextFunction, Request, Response } from "express";

export interface IBaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    createOrUpdate(req: Request, res: Response, next: NextFunction): Promise<void>;
    removeById(req: Request, res: Response, next: NextFunction): Promise<void>;
}