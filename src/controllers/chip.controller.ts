import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Chip } from "../models/Chip";
import { IBaseController } from "../types/controllers/base.controller";
import { IChipDTO } from "../types/dto/chip.dto";

export class ChipController implements IBaseController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        return
    }

    async createOrUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            const data: IChipDTO = req.body;

            const result = new Chip().createOrUpdate(data);

            if (!result) {
                res.status(StatusCodes.BAD_REQUEST);
            } else {
                res.status(StatusCodes.OK).json({
                    message: "Returned new or updated Chip",
                    data: result
                });
            }

        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async removeById(req: Request, res: Response, next: NextFunction) {
        try {
            const chipId: string = req.params.chipId;

            const result: boolean = new Chip().removeById(chipId);

            if (!result) {
                res.status(StatusCodes.BAD_REQUEST);
            } else {
                res.status(StatusCodes.OK).json({
                    message: "Returned <true> if Chip was deleted",
                    data: {status: result}
                });
            }
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}