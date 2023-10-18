import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false); // Update loading state when data is loaded
      });
  }, [url]); 

  return { brands, loading };
};

export default FetchData;
