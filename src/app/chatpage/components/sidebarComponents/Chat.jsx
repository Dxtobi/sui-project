import * as React from "react";
import PlusIcon  from "../icons/PlusIcon";

function NewChat() {
  return (

    <div>
        <button className="newChatButtonContainer">

            <div className="newChatContainer">

                <div className="newChatIcon">
                    <PlusIcon/> 
                </div>
            
                <div className="newChatText">
                    New Chat
                </div>

            </div>

        </button>
    </div>

    );
}

export default NewChat;
