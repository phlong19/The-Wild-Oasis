import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentStays() {
  const [searchParam] = useSearchParams();
  const last = !searchParam.get("last") ? 7 : Number(searchParam.get("last"));
  const date = subDays(new Date(), last).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryKey: ["bookings", `stays-${last}`],
    queryFn: () => getStaysAfterDate(date),
  });

  const confirmedStays = stays?.filter(
    (s) => s.status === "checked-in" || s.status === "checked-out"
  );

  return { stays, isLoading, confirmedStays, last };
}
