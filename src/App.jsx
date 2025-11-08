import React from "react";
import Navbar from "./components/Navbar";
import Data from "./components/Data";

function App() {
  
  return (
    <>
      <div className="bg-gray-400 relative h-screen w-full">
        <Navbar />
        <Data />
      </div>
    </>
  );
}

export default App;
