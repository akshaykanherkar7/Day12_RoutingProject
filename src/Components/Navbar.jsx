import React from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
            alt=""
          />
        </div>
        <div className={styles.shopsite}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="mens">
            <p>Mens</p>
          </Link>
          <Link to="womens">
            <p>Womens</p>
          </Link>
          <Link to="childrens">
            <p>Childrens</p>
          </Link>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
