import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [allData, setAllData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false); // Update loading state when data is loaded
      });
  }, [url]); 

  return {    allData, loading };
};

export default FetchData;
