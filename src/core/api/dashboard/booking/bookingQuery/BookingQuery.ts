import { IData } from "@/core/types/IData";
import { useQuery } from "@tanstack/react-query";
import {  GetBookings } from "../Booking";

export const useBookings = () => {
  return useQuery<IData[]>({
    queryKey: ["bookings"],
    queryFn: GetBookings,
  });
};
