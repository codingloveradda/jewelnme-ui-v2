import React from "react";
import Image from "next/image";
import Group1 from "../../../public/Images/Footer/Group 9964.svg";
import Group2 from "../../../public/Images/Footer/Group 9965.svg";
import Group3 from "../../../public/Images/Footer/Group 9966.svg";
import Group4 from "../../../public/Images/Footer/Group 9967.svg";
import Group5 from "../../../public/Images/Footer/Group 9968.svg";
import Group6 from "../../../public/Images/Footer/Group 9969.svg";
import Group7 from "../../../public/Images/Footer/Group 9970.svg";

const Footer2 = () => {
  return (
    <div className="footer-2 flex justify-between items-center">
      <div className="footer-2-title">
        <p>Corporate Identity Number: U36999PB2021PTC054075</p>

        <p>Jewelnme Private Limited 2022, All Rights Reserved.</p>
      </div>
      <div className="footer-cards flex gap-[20px] items-center">
        <Image src={Group7} alt="payment method" className="h-[14px]" />
        <Image src={Group2} alt="payment method" className="h-[14px]" />
        <Image src={Group1} alt="payment method" className="h-[14px]" />
        <Image src={Group3} alt="payment method" className="h-[14px]" />
        <Image src={Group5} alt="payment method" className="h-[14px]" />
        <Image src={Group6} alt="payment method" className="h-[14px]" />
        <Image src={Group4} alt="payment method" className="h-[14px]" />
      </div>
    </div>
  );
};

export default Footer2;
