import axios from "axios";
import { BaseUrl } from "../BaseUrl";

export const CreatePayMents = async (body) => {
  const Response = await axios.post(`${BaseUrl}/api/payments`, body);

  return Response.data;
};
