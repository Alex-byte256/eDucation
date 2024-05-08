import React from 'react';
import './App.css';
import './output.css';
import {Header} from "./Components/Header/Header";
import {Outlet} from "react-router";
import {Sidebar} from "./Components/Sidebar/Sidebar";

function App() {

  return (
    <>
     <Header/>
      <Sidebar/>
     <Outlet/>
    </>
  );
}

export default App;
