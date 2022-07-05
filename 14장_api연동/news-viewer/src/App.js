import "./App.css";
import axios from "axios";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import BasicTabs from "./Layout/BasicTabs";
import { Route, Routes } from "react-router-dom";
import NewsList from "./component/NewsList";
function App() {
  return (
    <div>
      <BasicTabs />
      <Routes>
        <Route path='/' element={<div>main</div>} />
        <Route path='/us' element={<NewsList />} />
      </Routes>
    </div>
  );
}

export default App;
