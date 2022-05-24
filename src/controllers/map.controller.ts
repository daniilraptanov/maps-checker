import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Map } from "../models/Map";
import { IBaseController } from "../types/controllers/base.controller";

export class MapController implements IBaseController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = new Map().getAll();

            if (!result) {
                res.status(StatusCodes.BAD_REQUEST);
            } else {
                res.status(StatusCodes.OK).json({
                    message: "Returned all maps",
                    data: result || []
                });
            }
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async createOrUpdate(req: Request, res: Response, next: NextFunction) {
        return;
    }

    async removeById(req: Request, res: Response, next: NextFunction) {
        return;
    }
}