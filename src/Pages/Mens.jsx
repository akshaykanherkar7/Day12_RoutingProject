import React, { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ProductContext } from "../Contexts/ProdContext";
import "./Common.css";

const Mens = () => {
  const [data, setData] = useState([]);
  const { handleClick } = useContext(ProductContext);

  useEffect(() => {
    axios.get("http://localhost:8080/mens").then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <div
        // style={{
        //   // border: "1px solid",
        //   display: "grid",
        //   gridTemplateColumns: "repeat(3 , 400px)",
        //   gridTemplateRows: "auto",
        //   width: "80%",
        //   margin: "auto",
        //   gap: "20px",
        //   padding: "20px",
        // }}
        className="container"
      >
        {data.map((el, idx) => (
          <div
            key={idx}
            // style={{ border: "1px solid", padding: "10px" }}
            className="mapbox"
            onClick={() => handleClick(el)}
          >
            <img
              // style={{ width: "20%", margin: "auto" }}
              className="img"
              src={el.image}
              alt=""
            />
            <h2>Name: {el.name}</h2>
            <h6>Type: {el.type}</h6>
            <p>Price: {el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
