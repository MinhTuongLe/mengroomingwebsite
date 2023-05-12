import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = async () => {
    try {
      const docRef = doc(db, collectionName, documentID);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const obj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setDocument(obj);
      } else {
        toast.error("Document not found");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDocument();
  }, []);

  return { document };
};

export default useFetchDocument;