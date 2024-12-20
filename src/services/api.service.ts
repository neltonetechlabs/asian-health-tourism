import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 5000,
});

interface FetchDataProps {
  apiEndPoint: string;
}

export const fetchData = async <T>({
  apiEndPoint,
}: FetchDataProps): Promise<T | null> => {
  try {
    // const response = await instance.get(apiEndPoint, {
    //   headers: {
    //     "Cache-Control": "no-cache",
    //     Pragma: "no-cache",
    //     Expires: "0",
    //   },
    // });
    // return response?.data?.data;
    const response = await fetch(process.env.API_HOST + apiEndPoint, {
      cache: 'no-store', // Fetch fresh data for every request
    });
    if (response?.ok) {
      const res = await response.json();
      return res?.data;
    }
    return null;
  } catch (error) {
    console.log("Something went wrong");
    return null;
  }
};

export const postData = () => {};
