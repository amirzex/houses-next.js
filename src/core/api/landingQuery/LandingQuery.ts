import { useQuery } from "@tanstack/react-query";
import { getRent, getReservation } from "../Landing";

export const useRentQuery = (params: any) => {
  return useQuery({
    queryKey: ["rent", params],
    queryFn: getRent,
  });
};

export const useReservationQuery = () => {
  return useQuery({
    queryKey: ["reservation"],
    queryFn: getReservation,
  });
};
