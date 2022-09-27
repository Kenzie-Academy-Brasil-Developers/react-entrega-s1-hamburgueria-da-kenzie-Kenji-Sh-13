import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [url]);

  return { data };
};
