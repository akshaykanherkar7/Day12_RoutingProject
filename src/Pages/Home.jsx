import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProdContext";
import "./Common.css";

const Home = () => {
  const [data, setData] = useState([]);
  const { handleClick } = useContext(ProductContext);

  useEffect(() => {
    axios.get("http://localhost:8080/allhome").then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <div className="container">
        {data.map((el, idx) => (
          <div key={idx} className="mapbox" onClick={() => handleClick(el)}>
            <img className="img" src={el.image} alt="" />
            <h2>Name: {el.name}</h2>
            <h6>Type: {el.type}</h6>
            <p>Price: {el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
