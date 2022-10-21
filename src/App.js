import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import Contact from "./components/Contact";
import { Succesful } from "./components/Succesful";
import Carousel from "./components/Carousel";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";



function App() {
 
  return (<>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="successful" element={<Succesful />}></Route>
        <Route path="Carousel" element={<Carousel />}></Route>
        <Route path="SignUp" element={<SignUp/>}></Route>
        <Route path="Cart" element={<Cart/>}></Route>



      </Routes>
    </BrowserRouter>

 
    </>
  );
}

export default App;
