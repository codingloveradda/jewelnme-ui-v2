import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Customize = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>

      <div className="model flex justify-center items-center py-[119px]" onClick={closeModal}>
        <div className="box w-[1136px] h-[710px]">
          <div className="h-[566px]">
            <div className="pl-[122px] pt-10 pr-10">
              <div className="flex justify-end">
                <Image src={Cancle} className="w-4" />
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
                <div className="detail_customize mt-5">
                  <h1>Customize My Jewel</h1>
                  <p className="mt-7">Estimated Cleaning Charges</p>
                  <h2 className="mt-4">₹ 25,000</h2>
                  <p className="mt-8">Existing Size: 06</p>
                  <div className="size px-5 py-2.5 mt-8">
                    <p>
                      Resize to: <span className="px-6">-</span> 00{" "}
                      <span className="pl-6">+</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="term_box flex justify-center items-center pl-[122px] pr-[66px] gap-[187px] h-[144px]">
            <div className="confirm">
              <input type="radio" />
              <label className="ml-2">
                By clicking this you agree to our{" "}
                <a href="#">
                  <span>Terms-and-Conditions</span>.
                </a>
              </label>
            </div>
            <div className="action_btn">
              <Link href={"../Profile_Services/Address"} legacyBehavior>
                <a className="px-[75px] py-3">Schedule Pickup</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customize;
