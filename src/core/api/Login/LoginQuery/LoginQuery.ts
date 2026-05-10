import { useMutation } from "@tanstack/react-query";
import { Login } from "../Login";

export const useLogin = () => {
  return useMutation({
    mutationFn: Login,
  });
};
