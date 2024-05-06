
import * as React from "react";
import Image from 'next/image'
import robot from '../images/Robot.png'

function RobotIcon({ fill = "", ...rest }) {
  return (





    <Image
    src={robot}
    alt="Robot Image"
    style={{
      width: '10px',
      height: 'auto',
      width: '36px',
      height: '33px'
    //   top: 7px;
    //   left: 7px;
    //   gap: 0px;
    //   opacity: 0px;
      
    }}
    />


);
}

export default RobotIcon;







