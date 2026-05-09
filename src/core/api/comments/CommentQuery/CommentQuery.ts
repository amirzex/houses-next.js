import { useQuery } from "@tanstack/react-query";
import { getAllComment } from "../FastComments";
import { IData } from "@/core/types/IData";

export const useGetAllComments = () => {
  return useQuery<IData[]>({
    queryKey: ["comments"],
    queryFn: getAllComment,
  });
};
