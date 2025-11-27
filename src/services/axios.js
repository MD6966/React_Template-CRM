import axios from "axios";
import ToastComp from "../components/toast/ToastComp";

const client = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

export const request = async ({ token = true, ...options }, notify = true) => {
  const authToken = ""

  const headers = {
    Accept: "application/json",
  };

  if (token && authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  const updatedOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers, 
    },
  };

  const onSuccess = (response) => {
    if (notify) {
      const message = response.message || {
        delete: "Removed Successfully",
        put: "Updated Successfully",
        post: "Already Added",
        patch: "Updated Successfully",
      }[options.method] || "Added Successfully";

      ToastComp({
        variant: response.status === 200 ? "success" : "info",
        message,
      });
    }
    return response;
  };

  const onError = (error) => {
    console.log("Error In Axios interceptor: ", error);
    if (notify) {
      ToastComp({
        variant: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Error! Try Again Later",
      });
    }
    return Promise.reject(error);
  };

  return client(updatedOptions).then(onSuccess).catch(onError);
};
