import React from "react";
import Image from "next/image";
import logo from "../../../public/Images/Logo.svg";
import warrenty from "../../../public/Images/Bag/jewelnme_warranty.png";

const Header3 = () => {
  return (
    <div className="header-3 flex justify-between items-center">
      <div className="logo">
        <Image src={logo} />
      </div>
      <div className="header-3-nav">
        <ul>
          <li>
            <a href="#">log In</a>
          </li>
        
          <li>
            <a href="#">Bag</a>
          </li>
      
          <li>
            <a href="#">Address</a>
          </li>
     
          <li>
            <a href="#">Payment</a>
          </li>
        </ul>
      </div>
      <div className="header-icon flex items-center gap-3">
        <Image src={warrenty} className="w-[35px]" />
        <p>100% Secure</p>
      </div>
    </div>
  );
};

export default Header3;
