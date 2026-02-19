import { IData } from "../types/IData";
import { BaseUrl } from "./BaseUrl";
import axios from "axios";
import { IFilterParams } from "../types/IFilterParams";
import { Property } from "../types/IReserveContext";

export const getData = async (params: IFilterParams): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses`, {
    params: {
      page: params.page ? Number(params.page) : 1,
      limit: params.limit ? Number(params.limit) : 9,
      search: params.search || "",
      sort: params.sort || "last_updated",
      location: params.location || "",
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

export const getPropertyById = async (id: string): Promise<Property> => {
  try {
    // console.log('Requesting URL:', `${BaseUrl}/api/houses/${id}`);
    
    const response = await axios.get(`${BaseUrl}/api/houses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    // console.log('Response status:', response.status);
    // console.log('Response data:', response.data);
    
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      // درخواست فرستاده شده ولی پاسخی نیومده
      console.error('No response received:', error.request);
    } else {
      // خطا در تنظیم درخواست
      console.error('Request error:', error.message);
    }
    
    console.error(`Error in getPropertyById for id ${id}:`, error);
    throw error;
  }
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
