import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const date = new Date();
  const { data: stays, isLoading } = useQuery({
    queryKey: ["stays"],
    queryFn: () => getStaysAfterDate(date),
  });

  return { stays, isLoading };
}
