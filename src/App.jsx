import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { DataProvider } from "./context/context";

function App() {
  return (
    <DataProvider>
        <Header />
        <Home />
        <Footer />
    </DataProvider>
  );
}

export default App;
