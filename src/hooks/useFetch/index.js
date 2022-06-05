import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setResult(res);
      })
      .catch((err) => {
        setResult(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return { fetch, result, loading };
  // return [fetch, result];
};

export default useFetch;
