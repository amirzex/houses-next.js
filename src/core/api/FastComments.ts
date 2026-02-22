import axios from "axios";
import { IData } from "../types/IData";
import { BaseUrl } from "./BaseUrl";

export const getComment = async ( house_id: number ): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/comments?house_id=${house_id}`);
  return response.data;
};
