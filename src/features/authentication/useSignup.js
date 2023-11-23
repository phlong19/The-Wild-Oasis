import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupAPI({ email, password, fullName }),
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        `User < ${data.user.user_metadata.fullName} > has been created. Please check for email verification.`
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signup };
}
