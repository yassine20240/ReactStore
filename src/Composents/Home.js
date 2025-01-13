import React from "react";
import StoreItem from "./StoreItem";
import Store from "./Store";

 
const Home = ( ) => {
  return (
    <>
      <div class="container mt-5 text-center ">
        <h1 class="display-4 fw-bold text-primary mb-3">
          Welcome to Our Store
        </h1>

        <h4 class="text-secondary mb-4 mt-5">
          Discover the finest collection of products we offer!
        </h4>

        <p class="text-muted ">
          From affordable essentials to premium items, our store is committed to
          providing you with high-quality products at great prices. Browse
          through the categories and explore a diverse range of items carefully
          curated just for you.
        </p>
        <h1 class="display-6 fw-bold text-info mb-3 mt-5">
         Take look of some our products
        </h1> 
      </div>

<nav class ="mt-5">
  <Store/>
 <StoreItem/> 
</nav>


    </>
  ); 
};

export default Home;
