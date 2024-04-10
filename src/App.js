import React from "react";
import { Route, Routes } from "react-router-dom";
import TableForm from "./Components/TableForm";


function App() {
  return (
   <>
   <div>
    <Routes>
      <Route path="/table" element={<TableForm/>} />




    </Routes>
    
   </div>
   </>
  );
}

export default App;
