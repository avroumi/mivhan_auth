import axios from "axios";
import { useState } from "react";

const UseApi = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = async (
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    body?: unknown,
  ) => {
    try {
      setLoading(true);

      const response = await axios({
        method,
        url,
        data: body,
      });

      setData(response.data);

      return response.data;
    } catch {
      setError("Something wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default UseApi;
