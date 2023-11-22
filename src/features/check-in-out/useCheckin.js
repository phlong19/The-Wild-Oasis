import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ refetchType: "active" });
      toast.success(`Booking #${data.id} checked in successfully`);
      navigate("/");
    },
    onError: (err) => {
      toast.error("There was an error while checking in");
    },
  });

  return { isCheckingIn, checkin };
}
