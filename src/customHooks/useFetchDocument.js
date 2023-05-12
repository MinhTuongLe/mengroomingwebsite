import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";
import axios from "axios";

const apiUrl = "http://localhost:8080/api/v1";



const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/${documentID}`);
      console.log(response.data);
      const obj = {
        id: response.data.id,
        desc: response.data.description,
        ...response.data,
      };
      setDocument(obj);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDocument();
  }, []);

  return { document };
};

export default useFetchDocument;