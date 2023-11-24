import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentBookings() {
  const [searchParam] = useSearchParams();
  const last = !searchParam.get("last") ? 7 : Number(searchParam.get("last"));
  const date = subDays(new Date(), last).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${last}`],
    queryFn: () => getBookingsAfterDate(date),
  });

  return { bookings, isLoading };
}
