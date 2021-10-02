import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PortHeader from "./Components/PortHeader/PortHeader";
import BlogHeader from "./Components/BlogHeader/BlogHeader";
import TelegramLink from "./Components/TelegramLink/TelegramLink";

function App() {
  return (
    <>
      <Footer></Footer>
      <Header></Header>
      <PortHeader></PortHeader>
      <BlogHeader></BlogHeader>
      <TelegramLink></TelegramLink>
    </>
  );
}

export default App;
