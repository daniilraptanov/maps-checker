import { Response } from "express";
import { sendResponse } from "../tools/response-handler.tools";

export const apiSchemasBadRequest = (error, res: Response) => {
  if (!error) {
    return;
  }

  if (!error.details[0].context.key) {
    return sendResponse(res, 400, "An error occurred.")
  }
  return sendResponse(res, 400, error.details[0].message)
};
