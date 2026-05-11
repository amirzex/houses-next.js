import { useQuery } from "@tanstack/react-query";
import { getAllComment, getCommentById } from "../FastComments";
import { IData } from "@/core/types/IData";

export const useGetAllComments = (params) => {
  return useQuery<IData[]>({
    queryKey: ["comments", params],
    queryFn: getAllComment,
  });
};


export const useHouseComments = (houseId: number) => {
  return useQuery({
    queryKey: ["house-comments", houseId],
    queryFn: () => getCommentById(houseId),
    enabled: !!houseId,
  });
};
