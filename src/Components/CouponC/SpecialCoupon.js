import React from "react";

function SpecialCoupon({ name, price, congratulation, para, para2, vaild }) {
  return (
    <div className="jmbenefits">
      <div className="jm-benfit-spcial">
        <span>{name}</span>
        <p>{price}</p>
      </div>
      <div className="right">
        <div className="top">
          <div className="flex justify-between">
            <span>{congratulation}</span>
            <input type="checkbox" />
          </div>
          <h5>{para}</h5>
          <p>{para2}</p>
        </div>
        <div className="bottom">
          <p>
            {vaild}
            <span>25-Sep-2022 | 12:00:00 AM</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialCoupon;
