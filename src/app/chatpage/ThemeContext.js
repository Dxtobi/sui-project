// 'use client'
// import React, { useState, createContext } from "react";


// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//     const [theme, setTheme] = useState('app-content-display-color ');

//     const switchDark = () => {
//         setTheme("app-content-display-color ");
//     }

//     const switchLight = () => {
//         setTheme("light");
//     }

//     return (
//         <ThemeContext.Provider value={{switchDark, switchLight, theme}}>
//             <div className={ `${theme} anim`}>{children}</div>
//         </ThemeContext.Provider>
//     )
// }