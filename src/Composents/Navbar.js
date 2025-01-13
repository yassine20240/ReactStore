import React from "react";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
    <>
      <nav   className="navbar bg-primary   d-flex justify-content-between align-items-center ps-5 pe-5 ">
        <h1  className=" px-5">Store casa </h1>
        <ul className="   d-flex  ">
          <li>
            <Link to="/"    className="nav-link text-white fw-bold   px-3 py-1    ">Home</Link>
          </li>
          <li>
            <Link to="/store"  className="nav-link text-white fw-bold   px-3 py-1  ">Store</Link>
          </li>
        </ul>
      </nav>
     
    </>
  );
};

export default Navbar;
