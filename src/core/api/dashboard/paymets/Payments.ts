import axios from "axios";

export const GetPayments = async ({ queryKey }) => {
  const [_key, params] = queryKey;

  const page = params?.page ?? 1;
  const limit = params?.limit ?? 10;
  const status =
    params?.status && params.status !== "all" ? params.status : "completed"; 

  const sort = params?.sort ?? "amount";
  const order = params?.order ?? "DESC";

  const url = `/api/payments?page=${page}&limit=${limit}&status=${status}&sort=${sort}&order=${order}`;

  const response = await axios.get(url);

  return response.data;
};
