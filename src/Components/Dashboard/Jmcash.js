import React from "react";
import Image from "next/image";
import cash from "../../../public/Images/Dashboard/cash.png";


const Jmcash = ({name}) => {
  return (
    <div className="jmcash">
      <div className="img-title">
        <Image src={cash} alt='cash' className='w-[96px]'/>
        <h1>{name}</h1>
      </div>
      <div className="balance">
        <h2>Total Balance</h2>
        <div className="balance-btn">
          <p>₹ 30,000.00</p>
          <a
            href="#"
          >
            Withdraw
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jmcash;
