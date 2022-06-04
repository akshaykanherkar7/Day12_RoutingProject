import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleClick = (el) => {
    setProduct(el);
    navigate("/details");
  };
  return (
    <ProductContext.Provider value={{ handleClick, product }}>
      {children}
    </ProductContext.Provider>
  );
};
