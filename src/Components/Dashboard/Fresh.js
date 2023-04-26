import React from "react";
import Image from "next/image";
import Link from "next/link";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import ProgressBar from "./ProgressBar";
import { BsArrowRight } from "react-icons/bs";

const Fresh = () => {
  return (
    <div className="fresh">
      <div className="fresh-top">
        <div className="fresh-img replace">
          <Image src={ring} alt="ring" className="rounded-xl"/>
        </div>
        <div className="fresh-title">
          <p>
            Arcana Fresh Diamond Studs -
            <span> URX1GX15 </span>
          </p>
          <p>₹ 45,522.45</p>
        </div>
        <div className="fresh-view">
          <a href="">View Details
          </a>
          {/* <Image src={Go} alt='go' className='w-[16px] h-[10px]'/> */}
          <BsArrowRight />
        </div>
      </div>
      <div className="fresh-bottom">
        <ProgressBar />
      </div>
    </div>
  );
};

export default Fresh;
