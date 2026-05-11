import { useQuery } from "@tanstack/react-query";
import { GetPayments } from "../Payments";

export const usePayments = (filters = {}) => {
  const params = {
    sort: "amount",
    order: "DESC",
    ...filters,
  };
  return useQuery({
    queryKey: ["payments", params],
    queryFn: GetPayments,
  });
};
