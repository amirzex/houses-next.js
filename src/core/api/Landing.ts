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
    const response = await axios.get(`${BaseUrl}/api/houses/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request error:", error.message);
    }

    console.error(`Error in getPropertyById for id ${id}:`, error);
    throw error;
  }
};

export const getSuggestion = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses`);
  return response.data?.houses ?? [];
};

export const getReservation = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses`, {
    params: {
      limit: 10,
      transactionType: "reservation",
      order: "DESC",
      sort: "last_updated",
    },
  });

  return response.data?.houses ?? [];
};

export const getBestChoice = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/houses?`);
  return response.data.houses;
};

export const getLocationData = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/locations`);
  return response.data.data;
};

export const getCommentData = async (): Promise<IData[]> => {
  const response = await axios.get(`${BaseUrl}/api/comments`);
  return response.data.data;
};

// rent
export const getRent = async ({
  queryKey,
}: {
  queryKey: any[];
}): Promise<IData[]> => {
  const [_key, params] = queryKey;

  const limit = params?.limit ?? 10;
  const transactionType = params?.transactionType ?? "rental";
  const order = params?.order ?? "DESC";
  const sort = params?.sort ?? "last_updated";

  const maxPrice = params?.maxPrice ?? "";
  const minRent = params?.minRent ?? "";
  const maxRent = params?.maxRent ?? "";
  const minMortgage = params?.minMortgage ?? "";
  const maxMortgage = params?.maxMortgage ?? "";
  const search = params?.search ?? "";

  // اضافه کردن موارد جدید
  const location = params?.location ?? "";
  const propertyType = params?.propertyType ?? "";
  const minArea = params?.minArea ?? "";
  const maxArea = params?.maxArea ?? "";

  const queryParams = new URLSearchParams();

  queryParams.append("limit", String(limit));
  queryParams.append("transactionType", transactionType);
  queryParams.append("order", order);
  queryParams.append("sort", sort);

  if (maxPrice) queryParams.append("maxPrice", String(maxPrice));
  if (minRent) queryParams.append("minRent", String(minRent));
  if (maxRent) queryParams.append("maxRent", String(maxRent));
  if (minMortgage) queryParams.append("minMortgage", String(minMortgage));
  if (maxMortgage) queryParams.append("maxMortgage", String(maxMortgage));
  if (search) queryParams.append("search", search);

  if (location) queryParams.append("location", location);
  if (propertyType) queryParams.append("propertyType", propertyType);
  if (minArea) queryParams.append("minArea", String(minArea));
  if (maxArea) queryParams.append("maxArea", String(maxArea));

  const url = `${BaseUrl}/api/houses?${queryParams.toString()}`;

  const response = await axios.get(url);

  return response.data?.houses ?? [];
};
