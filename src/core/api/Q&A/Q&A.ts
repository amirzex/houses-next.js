import axios from "axios";
import { BaseUrl } from "../BaseUrl";

export const Question = async () => {
  const Response = await axios.post(`${BaseUrl}/api/property-qa/question`);

  return Response.data;
};
