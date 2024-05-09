

import React, {useState, useEffect, useRef} from 'react';
import UserIcon from "../icons/UserIcon";
import UserAccountIcon from "../icons/UserAccountIcon";
import TrophyIcon from "../icons/TrophyIcon";
import UpdatesFaqIcon from "../icons/UpdatesFaqIcon";
import HelpIcon from "../icons/HelpIcon";
import ApiIcon from "../icons/ApiIcon";
import DoorOpenIcon from "../icons/DoorOpenIcon";
import RightArrowIcon from "../icons/RightArrowIcon";



function User() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (

    <div className="App">
        
      <div className='menu-container' ref={menuRef}>

        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>

            <div className="sidebarWrapperItemsContainer sidebarWrapperItemsContainer1">

                <div className="sidebarWrapperItemsIcon"><UserIcon/></div>
                
                <div className="sidebarWrapperItemstext sidebarWrapperItemstext2">
                    Uche Noble
                </div>

            </div>
        
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <span>Uche@mail.com</span>

          <ul>
            <li>
                <div className="user_list user_list_SPECIAL_ONE">
                    <div><UserAccountIcon/> </div>
                    <div className="user_list_text user_list_text_SPECIAL">My Account</div>
                    <div className="user_list_icon_two"><RightArrowIcon/> </div>
                </div>
            
            </li>

            <li>
                <div className="user_list">
                    <div><TrophyIcon/> </div>
                    <div className="user_list_text user_list_text_SPECIAL">My Achievements</div>
                    <div className="user_list_icon_two"><RightArrowIcon/> </div>
                </div>
            
            </li>

            <li>
                <div className="user_list">
                    <div><UpdatesFaqIcon/> </div>
                    <div className="user_list_text">Updates & FAQ</div>
                </div>
            
            </li>

            <li>
                <div className="user_list">
                    <div><HelpIcon/> </div>
                    <div className="user_list_text">Help</div>
                </div>
            
            </li>

            <li>
                <div className="user_list">
                    <div><ApiIcon/> </div>
                    <div className="user_list_text">API</div>
                </div>
            
            </li>

            <li>
                <div className="user_list">
                    <div><DoorOpenIcon/> </div>
                    <div className="user_list_text">Logout</div>
                </div>
            
            </li>



          </ul>
        </div>

      </div>
    </div>
  );
  
}


export default User;
