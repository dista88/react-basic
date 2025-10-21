import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMsg from "./components/ChatMsg";
import Todo from "./components/todo";
import Test from "./components/test";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <ChatInput />
      <ChatMsg message="hello" sender="user" />
      <ChatMsg message="hello world" sender="robot" /> */}
      {/* <Todo /> */}
      {/* <Test /> */}
      <Header />
      <MainContent />
      <Greet />
      <Footer />
    </>
  );
}

export default App;
