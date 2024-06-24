// import { useState } from "react";
import "./App.css";
// import Accordian from './components/accordian'
// import Accordion from "./components/accordian/index3";
// import RandomColor from "./components/random-color/index";
// import StarRating from "./components/star-rating/index";
// import LoadMoreData from "./components/load-more-data";
// import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Address from "./components/Address/Address";
import Payment from "./components/Cart/payment/Payment";

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      {/* <Address/> */}
      <Payment />
      <Routes>
        {/* Define your routes here */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
