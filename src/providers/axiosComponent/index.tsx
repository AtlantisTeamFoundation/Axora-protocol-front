import axios from "axios";
import type { AxiosError, Method } from "axios";
import React, { useEffect, useState } from "react";

interface AxiosComponentProps<T> {
  url: string;
  method?: Method; // Axios Method (GET, POST, etc.)
  onSuccess?: (data: T) => void; // Callback when data is fetched
  render: (data: T) => React.ReactNode; // Custom render function for data
  onLoading?: React.ReactNode;
}

const AxiosComponent = <T,>({
  url,
  method = "GET",
  onSuccess,
  render,
  onLoading,
}: AxiosComponentProps<T>) => {
  const [data, setData] = useState<T | null>(null); // State for fetched data
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        await delay(4000);

        const response = await axios<T>({
          method,
          url,
          signal: controller.signal,
        });

        setData(response.data);

        if (onSuccess) onSuccess(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;

        //Check if the error is a cancellation error(part of cleanup logic)
        if (axios.isCancel(axiosError) || axiosError.code === "ERR_CANCELED") {
          return; // Ignore canceled requests
        }

        console.log("AxiosComponent Error:", axiosError.message, axiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    //Cleanup: Call abort when the component unmounts or dependencies change
    return () => controller.abort();
  }, [url, method, onSuccess]);

  if (loading) return onLoading ?? <div>Loading...</div>;

  if (data === null) {
    // This is a safety net for unexpected null state
    return null;
  }

  return <div>{render(data)}</div>;
};

export default AxiosComponent;
