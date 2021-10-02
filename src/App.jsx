import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PortHeader from "./Components/PortHeader/PortHeader";
import BlogHeader from "./Components/BlogHeader/BlogHeader";

function App() {
  return (
    <>
      <Footer></Footer>
      <Header></Header>
      <PortHeader></PortHeader>
      <BlogHeader></BlogHeader>
    </>
  );
}

export default App;
