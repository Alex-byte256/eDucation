import React, {useState} from 'react';
import './App.css';
import './output.css';
import {Header} from "./Components/Header/Header";
import {Outlet} from "react-router";
import {Sidebar} from "./Components/Sidebar/Sidebar";

function App() {
    const [isDarkMode,setIsDarkMode] = useState<Boolean>(false)

  return (
    <div className={`
    ${isDarkMode && 'dark'}
    h-[100%]
    bg-gray-700 bg-opacity-30 
    dark:bg-black dark:bg-opacity-55`}>
     <Header/>
      <Sidebar isDark={isDarkMode} setIsDark={setIsDarkMode}/>
     <Outlet/>
    </div>
  );
}

export default App;
