import { useMutation, useQuery } from "@tanstack/react-query";
import { PostContact } from "../ContactUs";
import { IData } from "@/core/types/IData";

export const useContacts = () => {
  return useMutation({
    mutationFn: PostContact,
  });
};
