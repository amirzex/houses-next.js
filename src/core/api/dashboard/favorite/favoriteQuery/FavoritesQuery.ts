import { useQuery } from "@tanstack/react-query";
import { GetFavorites } from "../Favorites";

export const useGetFavorites = () => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: () => GetFavorites(),
  });
};
