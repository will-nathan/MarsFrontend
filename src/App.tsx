import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetPhotos from "./pages/GetPhotos";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path="/GetPhotos" element={<GetPhotos/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
