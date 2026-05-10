import { useQuery } from "@tanstack/react-query";
import { GetUser } from "../User";

export const useUser = (id: string | number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => GetUser(id),
    enabled: !!id,
  });
};
