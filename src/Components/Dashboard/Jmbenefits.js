import React from "react";
import {  BsChevronDown} from "react-icons/bs";

const Jmbenefits = ({name}) => {
  return (
    <div className="jmbenefits">
      <div className="title">
        <h1>{name}% OFF</h1>
      </div>
      <div className="right">
        <div className="top">
          <h2>
            On minimum purchase of
            <span>Rs.1,00,000</span>
          </h2>

          <h2>
            code : <span> HAPPYBUY10</span>
          </h2>
        </div>
        <div className="bottom">
          <h2>
            Expiry:
            <span>SEP 25 2022 | 11:59:00 PM</span>
          </h2>
          <a href="#">
            Details 
            <span>
              {/* <Image  src={drop} alt='drop' className="w-[16px] h-[10px]"/> */}
              <BsChevronDown />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jmbenefits;
