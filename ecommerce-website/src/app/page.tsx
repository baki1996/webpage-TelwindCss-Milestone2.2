import React from "react";
import Navbar from "../app/components/Navbar"
import Offer from "./components/Offer";
import Card from "./components/Card";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Progressor from "./components/Progressor";
import Testimonal from "./components/Testimonals";
import Banner from "./components/Banner";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white ">
   <Navbar/>
   <Banner/>
 <Card/>
 <Carousal/>
 <ProductList/>
 <Progressor/>
 <Offer/>
 <Testimonal/>
 <Footer/>
 <MenuItem/>

    </div>
  )
}