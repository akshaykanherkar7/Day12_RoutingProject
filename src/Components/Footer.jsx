import React from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h3>Support</h3>
        <Link to="faq">
          <p>FAQ</p>
        </Link>
        <Link to="aboutus">
          <p>About Us</p>
        </Link>
        <Link to="contactus">
          <p>Contact Us</p>
        </Link>
      </div>

      <div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/600/947/small/set-of-social-media-icon-in-round-bakground-free-vector.jpg"
          alt=""
        />
      </div>
      <div className={styles.leftBox}>
        <h3>Tanner Goods</h3>
        <p>
          In a world where we are overwhelmed by products made to break down or
          go out style, we aim to go agains that gain.
        </p>
      </div>
    </div>
  );
};

export default Footer;
