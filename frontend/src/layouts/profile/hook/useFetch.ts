import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ url }: { url: string }) {
  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
        if (response.status === 404) {
          throw new AxiosError("Data Not Found", "404");
        }
        if (response.status === 500) {
          throw new AxiosError("Internal Server Error", "500");
        }
      })
      .catch((e) => {
        if (e instanceof AxiosError) {
          setError(e.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
