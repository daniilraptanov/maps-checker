import { NextFunction, Request, Response } from "express";
import { apiSchemasBadRequest } from "../../errors/http.errors";
import { chipSchema } from "../../schemas/chip.schemas";
import { IBaseValidate } from "../../types/validations/base.validate";

export default class ChipValidate implements IBaseValidate {
    async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { id, name, level, isComplete, mapId } = req.body;
          const { error } = chipSchema.validate({ id, name, level, isComplete, mapId });
        
          if (!error) {
            return next();
          }
        
          return apiSchemasBadRequest(error, res);   
    }
}