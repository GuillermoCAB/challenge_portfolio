import { axiosInstance } from "./api";

export const getTechs = async () => {
  try {
    let fetch = await axiosInstance.get(
      "/06836cf2-26e9-4328-804a-54c81be1bcc7"
    );

    return fetch.data;
  } catch (error) {
    throw error;
  }
};
