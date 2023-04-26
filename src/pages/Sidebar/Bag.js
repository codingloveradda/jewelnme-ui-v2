import React from "react";
import Image from "next/image";
import Link from "next/link";
import User from "../../../public/Images/SidebarIMG/Profile13.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart.svg";
import bagShoping from "../../../public/Images/SidebarIMG/bag.png";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import Go from "../../../public/Images/SidebarIMG/Go.png";
import SidebarHeader from "./SidebarHeader";

const Bag = ({ closeModal }) => {
  return (
    <>
      <div className="sidebar-wrapper" onClick={closeModal}></div>
      <div className="sidebar-container flex justify-end">
        <div className="profile">
          <SidebarHeader user={User} heart={Heart} bag={bagShoping} />
          <div className="wishlist">
            <div className="title">
              <Link href={"../Login/Login"}>
                Log In
                <Image src={Go} alt="go" className="w-[16px] h-[10px]" />
              </Link>
              <h1>Bag</h1>
            </div>

            <div className="cards">
              <div className="details">
                <div className="image">
                  <Image
                    src={ring}
                    alt="ring"
                    className="w-[210px] h-[210px] replace"
                  />
                </div>
                <div className="content">
                  <p>Arcana Fresh Diamond Studs</p>
                  <span>₹ 25,000 - ₹ 50,000</span>
                  <div className="content-btn">
                    <a href="#">
                      Qty: <button>-</button> 1 <button>+</button>
                    </a>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="image">
                  <Image
                    src={ring}
                    alt="ring"
                    className="w-[210px] h-[210px] replace"
                  />
                </div>
                <div className="content">
                  <p>Arcana Fresh Diamond Studs</p>
                  <span>₹ 25,000 - ₹ 50,000</span>
                  <div className="content-btn">
                    <a href="#">
                      Qty: <button>-</button> 1 <button>+</button>
                    </a>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="image">
                  <Image
                    src={ring}
                    alt="ring"
                    className="w-[210px] h-[210px] replace"
                  />
                </div>
                <div className="content">
                  <p>Arcana Fresh Diamond Studs</p>
                  <span>₹ 25,000 - ₹ 50,000</span>
                  <div className="content-btn">
                    <a href="#">
                      Qty: <button>-</button> 1 <button>+</button>
                    </a>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="image">
                  <Image
                    src={ring}
                    alt="ring"
                    className="w-[210px] h-[210px] replace"
                  />
                </div>
                <div className="content">
                  <p>Arcana Fresh Diamond Studs</p>
                  <span>₹ 25,000 - ₹ 50,000</span>
                  <div className="content-btn">
                    <a href="#">
                      Qty: <button>-</button> 1 <button>+</button>
                    </a>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bagpayment">
            <p>Payable Amount</p>
            <span>₹ 25,000</span>
          </div>
          <div className="bagbtn">
            <Link href={"../Shipping_Bag/Bag16"} legacyBehavior>
              <a>Go to Bag</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
