import { useMutation } from "@tanstack/react-query";
import { Question } from "../Q&A";

export const useQuestion = () => {
  return useMutation({
    mutationFn: Question,
  });
};
