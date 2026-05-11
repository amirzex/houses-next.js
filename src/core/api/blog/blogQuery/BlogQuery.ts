import { useQuery } from "@tanstack/react-query";
import { GetBlog } from "../Blog";

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: GetBlog,
  });
};
