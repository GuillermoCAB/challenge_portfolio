import { axiosInstance } from "./api";

export const gatFAQs = async () => {
  try {
    let fetch = await axiosInstance.get(
      "/6e61d30e-2e7f-4c08-89fe-5fb7949d59b8"
    );

    return fetch.data;
  } catch (error) {
    throw error;
  }
};
