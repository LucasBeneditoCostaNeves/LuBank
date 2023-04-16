import { useContext, useState } from 'react';
import './App.css';
import React from "react"
import { CreateContextGenerico } from './context/fullcontext';
import  {RoutersPage}  from "./router/index.jsx"

function App() {
  const { number, setNumber } = useContext(CreateContextGenerico)
  return (
    <div className="App">
      <RoutersPage/>
    </div>
  );
}

export default App;
