import { toast } from "react-toastify";

export const showErrorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    pauseOnHover: true,
    // Customize the appearance for error messages
    style: {
      backgroundColor: "#FFF", // Red background
      zIndex: 100000,
    },
    // You can also specify custom className for further styling
    className: "custom-error-toast",
  });
};

export const showSuccessMessage = (message) => {
  toast.dark(message, {
    position: "top-right",
    pauseOnHover: true,
    // Customize the appearance for success messages
    style: {
      backgroundColor: "#9C27B0", // Green background
      zIndex: 100000,
    },
    // You can also specify custom className for further styling
    className: "custom-success-toast",
  });
};
