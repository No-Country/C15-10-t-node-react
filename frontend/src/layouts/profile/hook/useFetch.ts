import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useFetch({
  url,
  options,
}: {
  url: string;
  options?: object | undefined;
}) {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        if (response.data === null) {
          throw new AxiosError("Data Not Found", "404");
        }
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
