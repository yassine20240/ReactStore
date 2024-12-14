import React from "react";
import { data } from "react-router-dom";
 
const StoreItem = ({ data =[]}) => {
  return (
    <div class="container mt-4">
     
    
    <table class="table   table-hover table-bordered align-middle">
      <thead class="table-dark text-center">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td class="text-center">{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td class="text-center">
              <img src={item.image} alt="Product"
               class="img-thumbnail"   />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default StoreItem;
