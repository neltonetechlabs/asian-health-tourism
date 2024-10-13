import axios from "axios";
import { error } from "console";

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 2000,
});

interface FetchDataProps {
  apiEndPoint: string;
}

export const fetchData = async <T>({
  apiEndPoint,
}: FetchDataProps): Promise<T | null> => {
  try {
    const response = await instance.get(apiEndPoint);
    return response?.data?.data;
  } catch (error) {
    console.log("Something went wrong");
    return null;
  }
};

export const postData = () => {};
