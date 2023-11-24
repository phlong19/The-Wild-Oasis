import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const date = new Date();
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookingsAfterDate(date),
  });

  return { bookings, isLoading };
}
