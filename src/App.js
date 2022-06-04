import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUS from "./Pages/AboutUS";
import Childrens from "./Pages/Childrens";
import ContactUS from "./Pages/ContactUS";
import Details from "./Pages/Details";
import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="mens" element={<Mens />}></Route>
        <Route path="womens" element={<Womens />}></Route>
        <Route path="childrens" element={<Childrens />}>
          {" "}
        </Route>
        <Route path="contactus" element={<ContactUS />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="aboutus" element={<AboutUS />}></Route>
        <Route path="details" element={<Details />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
