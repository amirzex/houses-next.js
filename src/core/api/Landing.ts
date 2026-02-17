import { IData } from "../types/IData";
import { BaseUrl } from "./BaseUrl";
import axios from "axios";
import { IFilterParams } from "../types/IFilterParams";

export const getData = async (params: IFilterParams): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses`, {
    params: {
      page: params.page ? Number(params.page) : 1, 
      limit: params.limit ? Number(params.limit) : 9, 
      search: params.search || '',
      sort: params.sort || "last_updated",
      location: params.location || '',
      minPrice:
        params.minPrice !== undefined ? Number(params.minPrice) : undefined,
      maxPrice:
        params.maxPrice !== undefined ? Number(params.maxPrice) : undefined,
    },
    paramsSerializer: {
      serialize: (params) => {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            searchParams.append(key, String(value));
          }
        });
        return searchParams.toString();
      },
    },
  });

  return response.data.houses;
};

export const getSuggestion = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses?`);
  return response.data.houses.slice(3, 6);
};
export const getBestChoice = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses?`);
  return response.data.houses.slice(6, 9);
};

export const getLocationData = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/locations`);
  return response.data.data.slice(0, 9);
};

export const getCommentData = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/comments`);
  return response.data.data.slice(0, 3);
};
