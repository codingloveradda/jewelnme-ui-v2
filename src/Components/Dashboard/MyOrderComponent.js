import React from "react";
import Image from "next/image";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";


function MyOrderComponent() {
  return (
    <div className="fresh-P46">
      <div className="fresh-P46-top">
        <div className="fresh-img replace">
          <Image src={ring} alt="ring" className="rounded-xl" />
        </div>
        <div className="fresh-title">
          <div className="flex justify-between fresh-first">
            <p>
              Arcana Fresh Diamond Studs
              <span> URX1GX15 </span>
            </p>
            <p>₹ 25,000</p>
          </div>
          <div className="fresh-second">
            <p className="py-2 px-3">
              Summery No.: <span> 000000000000 </span>
            </p>
            <p className="py-2 px-5 ">Bill No.: 00000000000</p>
            <p className="py-2 px-4">Bill Date: DD/MMM/YYYY</p>
            <p className="py-2 px-7">Occasion: Engagement</p>
          </div>

          <div className="justify-end flex fresh-third">
            <select name="" id="">
              <option value="">Request </option>
              <option value="">Change Address</option>
              <option value="">Exchange/Return Order</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrderComponent;
