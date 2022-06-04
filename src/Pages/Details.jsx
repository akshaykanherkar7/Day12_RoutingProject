import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProdContext";

const Details = () => {
  const { product } = useContext(ProductContext);
  const { name, type, price, image } = product;
  return (
    <div>
      <div
        style={{
          //   border: "1px solid",
          display: "grid",
          gridTemplateColumns: "repeat(3 , 400px)",
          gridTemplateRows: "auto",
          width: "29%",
          height: "300px",
          margin: "auto",
          gap: "20px",
          padding: "20px",
          marginBottom: "5px",
        }}
      >
        <div style={{ border: "1px solid lightgray", padding: "10px" }}>
          <img style={{ width: "20%", margin: "auto" }} src={image} alt="" />
          <h2>Name: {name}</h2>
          <h6>Type: {type}</h6>
          <p>Price: {price}</p>
          <button
            style={{
              border: "1px solid teal",
              padding: "3px 12px",
              backgroundColor: "teal",
              color: "white",
              borderRadius: "6px",
              marginTop: "6px",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
