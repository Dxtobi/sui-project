import * as React from "react";
import SuiALIcon  from "../icons/SuiALIcon";
import SunIcon  from "../icons/SunIcon";
import MoonIcon  from "../icons/MoonIcon";
// import "../../main.css";
// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';

import { useContext } from "react";
// import { ThemeContext } from "../../ThemeContext";

function LayoutHeader() {

    // const {switchDark, switchLight, theme} = useContext(ThemeContext);

    // const { systemTheme, theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => {
    //     setMounted(true);
    //   }, []);
    
    //   if (!mounted) return null;
    //   const currentTheme = theme === 'system' ? systemTheme : theme;

  return (

    <>

        <div>

            <div className="header-layout-container" style={{width: "95%", display: "flex", justifyContent:"space-between", border:"2px solid none"}}> 

                <div style={{zIndex:"1", border:"2px solid none", width: "116px"}}>
                    <SuiALIcon/> 
                </div>

                <div className="app-color-mode-container">

                    {/* <div><SunIcon /></div> */}

                    <button 
                    // onClick={theme === "app-content-display-color " ? switchLight : switchDark}
                    >
                    {/* {theme === "app-content-display-color " ? <SunIcon /> : <MoonIcon />} */}
                    <SunIcon />
                    </button>



                    {/* <div className="app-color-mode">
                        
                    {currentTheme === 'dark' ? (
                    <button
                    className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
                    onClick={() => setTheme('light')}
                    >
                    {' '}
                    <SunIcon /> Light Mode
                    </button>
                ) : (
                    <button
                    className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                    onClick={() => setTheme('dark')}
                    >
                    <MoonIcon /> <span style={{color: "black"}}>Dark Mode</span>
                    </button>
                )}
                    
                    </div> */}

                </div>

            </div>

        </div>


    </>



    );
}

export default LayoutHeader;
