import { useEffect, useState } from "react";
const useFetch = (url) => {
  const[data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dt) => setData(dt))
      .catch((err) => console.log(err));
  }, []);
  return data;
};
export default useFetch;
