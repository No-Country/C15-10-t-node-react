import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useFetch({
  url,
  options,
  setter,
}: {
  url: string;
  options?: object | undefined;
  setter?: (arg0: any) => PayloadAction;
}) {
  const dispatch = useDispatch();
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
          if (setter) {
            dispatch(setter(response.data));
          }
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
  }, [url, options, dispatch, setter]);

  return {
    data,
    error,
    loading,
  };
}
