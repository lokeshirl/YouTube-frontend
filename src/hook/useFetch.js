import { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api.js";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDataFromApi(url, options)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return data;
};

export default useFetch;
