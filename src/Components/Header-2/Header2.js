import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Images/Logo.svg";
import warrenty from "../../../public/Images/Bag/jewelnme_warranty.png";

const Header2 = () => {
  return (
    <div className="header-2 flex justify-between">
      <Link href={"/"} className="logo">
        <Image src={logo} />
      </Link>
      <div className="header-icon flex items-center gap-3">
        <Image src={warrenty} className="w-[35px]" />
        <p>100% Secure</p>
      </div>
    </div>
  );
};

export default Header2;
