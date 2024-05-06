
import * as React from "react";
import Image from 'next/image'
import suiALIcon from '../images/SuiAILogo.png'

function SuiALIcon() {
  return (




    <>

    
        <Image
        src={suiALIcon}
        alt="SuiAILogo Image"
        style={{
        width: '116px',
        height: '50px'
        
        }}
        />

        <p style={{fontSize:"smaller !important", border: "2px solid none", textAlign:"center"}}>Ver 1.0 Apr 24</p>

    </>

    


);
}

export default SuiALIcon;







