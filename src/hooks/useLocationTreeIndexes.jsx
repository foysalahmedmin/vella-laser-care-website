import locationTreeIndexesGenerator from "@/utils/locationTreeIndexesGenerator";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useLocationTreeIndexes = ({ items = [] }) => {
  const location = useLocation();
  const { pathname } = location;
  const [locationTreeIndexes, setLocationTreeIndexes] = useState([]);

  useEffect(() => {
    if (items && pathname) {
      const indexes = locationTreeIndexesGenerator({
        items,
        currentPath: pathname,
      });
      if (indexes?.length) {
        setLocationTreeIndexes(indexes);
      }
    }
  }, [pathname, items]);

  return locationTreeIndexes;
};

export default useLocationTreeIndexes;
