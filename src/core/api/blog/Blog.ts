import axios from "axios";
import { BaseUrl } from "../BaseUrl";

export const GetBlog = async () => {
  const Response = await axios.get(`${BaseUrl}/api/blogs`);
  return Response.data;
};
