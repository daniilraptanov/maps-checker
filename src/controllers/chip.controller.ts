import { Request, Response, NextFunction } from "express";
import { IBaseController } from "../types/controllers/base.controller";

export class ChipController implements IBaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        return
    }

    createOrUpdate(req: Request, res: Response, next: NextFunction): Promise<any> {
        console.log("ChipController.createOrUpdate")
        return
    }

    removeById(req: Request, res: Response, next: NextFunction): Promise<any> {
        console.log("ChipController.removeById")
        return
    }
}