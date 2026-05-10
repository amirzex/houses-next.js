import { IData } from "@/core/types/IData";
import { useQuery } from "@tanstack/react-query";
import { GetDashboardSummary, GetDashboardTrend } from "../Dashboard";

export const useDashboardTrend = () => {
  return useQuery<IData[]>({
    queryKey: ["trend"],
    queryFn: GetDashboardTrend,
  });
};
export const useDashboardSummary = () => {
  return useQuery<IData[]>({
    queryKey: ["summary"],
    queryFn: GetDashboardSummary,
  });
};
