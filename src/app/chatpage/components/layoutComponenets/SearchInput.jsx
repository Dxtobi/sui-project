import * as React from "react";
import  SendLetterIcon from "../icons/SendLetterIcon";
import  SpeakerIcon from "../icons/SpeakerIcon";
import  MoveSyntaxIcon from "../icons/MoveSyntaxIcon";
import  StarsIcon from "../icons/StarsIcon";
import  UnitTestIcon from "../icons/UnitTestIcon";
import  DefilLendIcon from "../icons/DefilLendIcon";

function SearchInput() {


  return (

    <>

        <div className="search_wrap search_wrap_1">


            <div className="search_filter">

                <div>
                    <button>
                        <MoveSyntaxIcon/>
                        <p>Move Syntax</p>
                    </button>
                </div>
                
                <div>
                    <button>
                        <StarsIcon/>
                        <p>Smart Contracts</p>                        
                    </button>
                </div>
                
                <div>
                    <button>
                        <UnitTestIcon/>
                        <p>Unit tests</p>
                    </button>
                </div>
                
                <div>
                    <button>
                        <DefilLendIcon/>
                        <p>Defi and lending</p>
                    </button>
                </div>

            </div>

			<div className="search_box">

				<input type="text" className="input" placeholder="Talk to SuiAI..."/>

				<div className="btn_common">

                    <div className="search_btn_action_cont">
    					<button title="Speaker"><SpeakerIcon/></button>
                    </div>

                    <div className="search_btn_action_cont">
    					<button title="Search"><SendLetterIcon/></button>
                    </div>

				</div>


			</div>

		</div>


    </>



    );
}

export default SearchInput;
