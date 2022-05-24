import { NextFunction, Request, Response } from "express";
import { apiSchemasBadRequest } from "../../errors/http.errors";
import { mapsSchema } from "../../schemas/maps.schemas";
import { IBaseValidate } from "../../types/validations/base.validate";

export default class MapsValidate implements IBaseValidate {
    async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { id, name } = req.body;
          const { error } = mapsSchema.validate({ id, name });
        
          if (!error) {
            return next();
          }
        
          return apiSchemasBadRequest(error, res);   
    }
}