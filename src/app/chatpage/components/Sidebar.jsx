import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaRocketchat,
    FaThList
}from "react-icons/fa";


import Image from 'next/image'
// import BinPicture from './images/bin.jpg'

import { NavLink } from 'react-router-dom';

import  ChatIcon from "./icons/ChatIcon";
import  BinIcon from "./icons/BinIcon";
import  NewChat  from "./sidebarComponents/Chat";
import  User  from "./sidebarComponents/User";
import LayoutHeader from "./layoutComponenets/Header";


const Sidebar = ({children}) => {

    
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[

        {
            path:"/ethics",
            name:"AI Chat Tool Ethics",
            icon:<ChatIcon/>
        },

        {
            
            path:"/writetool",
            name:"AI Chat Tool Impact Writing",
            icon:<ChatIcon/>
        },
        {
            path:"/bot",
            name:"New Chat",
            icon:<ChatIcon/>
        },


    ]



    return (



        <>
{/*         
        <div className="container"> */}

           <div 
           style={{width: isOpen ? "356px" : "50px"}} 
           className="sidebar sidebarWrapperTop" 
           id="sidebarWrapper" 
           >

            <div style={{marginTop: "10%"}}>

                {/* <div className="top_section">

                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div> */}

                        
                <NewChat />

                {
                
                    menuItem.map((item, index)=>(

                    
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">

                            <div className="icon">

                            {item.icon}
                            
                            </div>

                            <div style={{display: isOpen ? "block" : "none"}} className="menu_label">
                            
                            {item.name}
                            
                            </div>

                        </NavLink>

                    ))
                }

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


                <div className="sidebarWrapperBottom">

                <div className="divider"></div>

                    <br/>
    
                    <div className="sidebarWrapperItemsContainer sidebarWrapperItemsContainer1">
                    {/* <div className="sidebarWrapperItemsIcon"><BinIcon/></div> */}

                    {/* <Image
                    src={BinPicture}
                    alt="SuiAILogo Image"
                    style={{
                    width: '116px',
                    height: '50px'
                    
                    }}
                    /> */}

                    
                    <BinIcon/>

                    <div className="sidebarWrapperItemstext">Clear conversations</div>
                    </div>

                    <br/>

                    <User />


                </div>

           </div>







        {/* </div> */}

        <div className="app-content-display app-content-display-color">

            
          <LayoutHeader />
        <main>{children}</main>

        </div>
        
        </>

    );
};

export default Sidebar;



// import classNames from "classnames";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState, useMemo } from "react";
// import {  ChatIcon} from "./icons";
// import {  BinIcon} from "./icons";
// import  NewChat  from "./sidebarComponents/Chat";
// import  User  from "./sidebarComponents/User";
// // import { ThemeProvider } from "../pages/context/ThemeContext";

// //create menu items in array format.
// const menuItems = [
//   { id: 1, label: "AI Chat Tool Ethics", icon: ChatIcon, link: "/" },
//   { id: 2, label: " AI Chat Tool Impact Writing", icon: ChatIcon, link: "/posts" },
//   { id: 3, label: "New Chat", icon: ChatIcon, link: "/users" },
// ];

// //create application sidebar.
// const Sidebar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [isCollapsible, setIsCollapsible] = useState(false);

//   //router function
//   const router = useRouter();

//   //toggle active menu
//   const activeMenu = useMemo(
//     () => menuItems.find((menu) => menu.link === router.pathname),
//     [router.pathname]
//   );

//   //toggle hide menu words and show menu words
//   const wrapperClasses = classNames(
//     "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
//     {
//       ["w-80"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     }
//   );

//   //toggle collapse
//   const collapseIconClasses = classNames(
//     "p-4 rounded bg-light-lighter absolute right-0",
//     {
//       "rotate-180": toggleCollapse,
//     }
//   );

//   //show nav items from the array list created above.
//   const getNavItemClasses = (menu) => {
//     return classNames(
//       "flex items-center cursor-pointer hover:bg-dark-darker rounded w-full overflow-hidden whitespace-nowrap",
//       {
//         ["bg-dark-darker"]: activeMenu.id === menu.id,
//       }
//     );
//   };

//   //toggle mouse hover
//   const onMouseOver = () => {
//     setIsCollapsible(!isCollapsible);
//   };

//   //toggle handler
//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };

//   return (

//     <>
      
//     <div id="sidebarWrapper" className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>

//       <div className="flex flex-col">

//         {/* <div className="flex items-center justify-between relative">

//           <div className="flex items-center pl-1 gap-4">
//             <LogoIcon />
//             <span
//               className={classNames("mt-2 text-lg font-medium text-text", {
//                 hidden: toggleCollapse,
//               })}
//             >
//               Sui Al
//             </span>
//           </div>

//           {
//             isCollapsible && (
//               <button
//                 className={collapseIconClasses}
//                 onClick={handleSidebarToggle}
//               >
//                 <CollapsIcon />
//               </button>
//             )
//           }
//         </div> */}

//         <div className="flex flex-col items-start mt-24 sidebarWrapperTop">


//           <NewChat />

//           {menuItems.map(({ icon: Icon, ...menu }) => {

//             const classes = getNavItemClasses(menu);

//               return (

//                 <div className={classes}>

//                   <Link href={menu.link}>
                    
//                     <a className="flex py-4 px-3 items-center w-full h-full">

//                       {/**sideBarIconContainer*/}
//                       <div className="sideBarIconContainer">
//                         <Icon/>
//                       </div>

//                       {!toggleCollapse && (
//                         <span className="menu_label">
//                           {menu.label}
//                         </span>
//                       )}

//                     </a>
                    
//                   </Link>

//                 </div>
//               );

//             })
//           }


//         </div>
        
//       </div>

//       {/* <div className={`${getNavItemClasses({})} px-3 py-4`}>
//         <div style={{ width: "2.5rem" }}>
//           <ChatIcon />
//         </div>
//         {!toggleCollapse && (
//           <span>
//             Logout
//           </span>
//         )}
//       </div> */}


//       <div className="divider"></div>

//       <div className="sidebarWrapperBottom">

//           <div className="sidebarWrapperItemsContainer sidebarWrapperItemsContainer1">
//             <div className="sidebarWrapperItemsIcon"><BinIcon/></div>
//             <div className="sidebarWrapperItemstext">Clear conversations</div>
//           </div>

//             <br/>

//           <User />


//       </div>




//     </div>

//     </>
    
//   );
// };

// //export application sidebar component.
// export default Sidebar;
