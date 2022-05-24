import { Response } from "express";
import { statusCodes } from "../types/tools/response.tools";
import { statusMessages } from "../constants";

export const sendResponse = (res: Response, status: statusCodes, message: string = "", data: any = null) => {
  const keyOfMessage : string = status.toString();

  return res.status(status).json({
    message: message || statusMessages[keyOfMessage],
    data
  })
}