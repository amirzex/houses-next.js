import { useQuery } from "@tanstack/react-query";
import { GetBlog, GetBlogById } from "../Blog";

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: GetBlog,
  });
};
export const useGetBlogById = (id) => {
  
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => GetBlogById(id),
    enabled: !!id,
  });
};
