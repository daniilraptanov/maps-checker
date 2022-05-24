import { StatusMessages } from "./types/tools/response.tools";


export const statusMessages : StatusMessages = {
  "201": "A request was successful and as a result, a resource has been created",
  "200": "The request was fulfilled",
  "500": "The server encountered an unexpected condition that prevented it from fulfilling the request",
  "204": "The server has successfully fulfilled the request and that there is no content",
  "400": "The server cannot or will not process the request due to something that is perceived to be a client error",
  "401": "The request has not been applied because it lacks valid authentication credentials for the target resource",
};