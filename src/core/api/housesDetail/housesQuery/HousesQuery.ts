
import { useQuery } from "@tanstack/react-query";
import { getHouseById } from "../HousesDetail";

export const useHouseById = (id) => {
  return useQuery({
    queryKey: ["house", id],
    queryFn: () => getHouseById(id),
    enabled: !!id,
  });
};
