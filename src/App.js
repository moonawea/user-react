import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Create from "./Components/Pages/Create"
import Update from "./Components/Pages/Update"
import Read from "./Components/Pages/Read"

const App = () => {


    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/create" element={<Create/>}/>
               <Route path="/update/:id" element={<Update/>}/>
               <Route path="/read/:id" element={<Read/>}/>
           </Routes>
       </BrowserRouter>
    )
}

export default App;