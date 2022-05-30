import { axiosInstance } from "./api";

export const gatFAQs = async () => {
  try {
    let fetch = await axiosInstance.get(
      "/8a2117ac-efd0-4dae-8643-e9e975b24743"
    );

    return fetch.data;
  } catch (error) {
    throw error;
  }
};
