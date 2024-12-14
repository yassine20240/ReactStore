import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./StoreItem";
import StoreItem from './StoreItem'  ;
const Store = () => {
  const [data, setdata] = useState([]);  
  const [errors, seterrors] = useState("");
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setdata(response.data);  
        seterrors("");  
        console.log( response.data   )
      })
      .catch((error) => {
        seterrors("Error in fetching data");  
        setdata([]);  
      });
  }, []);

  return (
    <div>
      
   
      <StoreItem data={data} />
    </div>
  );
};

export default Store;
