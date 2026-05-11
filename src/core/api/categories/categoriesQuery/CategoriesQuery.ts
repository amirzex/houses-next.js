// hooks/useCategories.js
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../Categories";

export const useCategories = (params) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: getCategories,
  });
};
