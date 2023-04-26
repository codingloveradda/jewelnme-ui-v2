import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Clean = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="model flex justify-center">
        <div className="box">
          <div className="h-[566px]">
            <div className="pl-[122px] pt-10 pr-10">
              <div className="flex justify-end">
                <Link href={"../MyOrder/MyOrder"}>
                  <Image src={Cancle} className="w-4" onClick={closeModal} />
                </Link>
              </div>
              <div className="grid grid-flow-col auto-cols-max gap-[120px] mt-[62px]">
                <div>
                  <div>
                    <Image src={Ring} alt="" />
                  </div>
                  <p className="img_text">
                    Arcana Fresh Diamond Studs - <span>URX1GX15</span>
                  </p>
                </div>
                <div className="details mt-24">
                  <h1>Clean My Jewel</h1>
                  <p className="mt-4">Estimated Charges</p>
                  <h2 className=" mt-4">₹ 25,000</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="term_box flex justify-center items-center pl-[122px] pr-[66px] gap-[187px] h-[144px]">
            <div className="confirm">
              <input type="radio" />
              <label className="ml-2">
                By clicking this you agree to our
                <span>
                  <a href="#">Terms-and-Conditions.</a>
                </span>
              </label>
            </div>
            <div className="action_btn">
              <Link href={"../Profile_Services/Address"} legacyBehavior>
                <a className=" px-[75px] py-3">Schedule Pickup</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clean;
