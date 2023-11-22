import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPending: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ refetchType: "active" });
      toast.success(`Check out booking #${data.id} successfully`);
    },
    onError: () => {
      toast.error("There was an error while checking out");
    },
  });

  return { checkout, isCheckingout };
}
