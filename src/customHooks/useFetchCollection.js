import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const apiUrl = "http://localhost:8080/api/v1";

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/products`);
      const allData = response.data.map((doc) => ({
    
        id: doc.name.split("/").pop(),
        ...doc.fields,
      }));

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;
