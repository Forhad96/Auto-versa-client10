import { useEffect, useState } from "react";

const useGetBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://auto-versa-server.vercel.app/brands")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setBrands(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle the error and set loading to false
      });
  }, []);

  return { brands, loading }; // Include the loading state in the return value
};

export default useGetBrands;
