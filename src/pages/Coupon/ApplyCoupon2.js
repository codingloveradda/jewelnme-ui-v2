import React from "react";
import Image from "next/image";
import jmbenefitIMG from "../../../public/Images/Coupon/bg-71.jpg";
// import cancle from "../../../public/Images/Profile_Services/Cancle.png";
import SpecialCoupon from "@/Components/CouponC/SpecialCoupon";
import DiamondMaking from "@/Components/CouponC/DiamondMaking";
import { RxCross2 } from "react-icons/rx";


function ApplyCoupon2({ closeModal }) {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="model flex justify-center items-center py-[119px]">
        <div className="box">
          <div
            className="jmbenfit71 h-[104px] w-[1136px]"
            style={{
              backgroundImage: `url(${jmbenefitIMG.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="cancle-img w-[16px]">
              <RxCross2 onClick={closeModal}/>
            </div>
            <h1>JM Benefits</h1>
          </div>
          <div className="discount">
            <div className="flex gap-4">
              <p>Spcial Discount</p>
              <p>₹ 10,000.00</p>
            </div>
            <div>+</div>
            <div className="flex gap-4">
              <p>JM Points</p>
              <p>₹ 2,000.00</p>
            </div>
            <div>+</div>
            <div className="flex gap-4">
              <p>JM Coupons</p>
              <p>₹ 3,000.00</p>
            </div>
            <div>=</div>
            <div className="flex gap-4">
              <span>Total Benefits</span>
              <span>₹ 15,000.00</span>
            </div>
          </div>
          <div className="special-discount">
            <SpecialCoupon
              name="Special Discount"
              price="₹ 10,000"
              congratulation="Congratulations !"
              para="You have special discount against 12th instalment for MJP"
              para2="This is Our Contribution as we said “You pay for 11 n we contribute for the 12th”"
              vaild="Valid up-to:  "
            />
            <SpecialCoupon
              name="JM Points"
              price="2,000 Pt."
              congratulation="Wow !"
              para="You are eligible to redeem these JM Points on this order."
              para2="JM Points Balance: 1,000 Pt. (After Redemption)"
              vaild="1000 JMP Expires: "
            />
            <div className="special-border-btm"></div>
            <div className="jmcoupon">
              <p>JM Coupons</p>
              <div className="jmcoupon-input">
                <input type="text" placeholder="Enter coupon code" />
                <button>Check</button>
              </div>
            </div>
            <DiamondMaking name="Diamond" price="₹ 10,000" />
            <DiamondMaking name="Making" price="₹ 5,000" />
          </div>
          <div className="jmcoupon-add-btn">
            <button>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyCoupon2;
