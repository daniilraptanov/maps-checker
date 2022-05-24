import { Request, Response, NextFunction } from "express";
import { IBaseController } from "../types/controllers/base.controller";

export class MapController implements IBaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        console.log("MapController.getAll")
        return
    }

    createOrUpdate(req: Request, res: Response, next: NextFunction): Promise<any> {
        return
    }

    removeById(req: Request, res: Response, next: NextFunction): Promise<any> {
        return
    }
}