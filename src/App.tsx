import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Outlet} from "react-router";

function App() {
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  );
}

export default App;
