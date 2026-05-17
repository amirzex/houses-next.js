import { useMutation } from "@tanstack/react-query";
import { CreatePayMents } from "../Payments";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: (data) => CreatePayMents(data),
  });
};
