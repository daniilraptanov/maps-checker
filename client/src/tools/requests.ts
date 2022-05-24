import { SendQueryType } from "../types/tools/ResponseInterfaces";

export async function sendQuery(
  url: string = "/category/getAll",
  method: string = "get",
  body = null,
  headers = {}
): Promise<SendQueryType> {
  if (body) {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  try {
    const response = await fetch(url, {
      method: method,
      body: body,
      headers: headers,
    });
    const result = await response.json();

    return {data: result.data, message: result.message, code: response.status}
  } catch {
    return {data: null, message: "Response error...", code: 400 }
  }
}
