import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import React from "react";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<div>
            <SideBar />
            <RecommendedVideos />
          </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
