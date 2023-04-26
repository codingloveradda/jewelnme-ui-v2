import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../../../public/Images/SidebarIMG/Profile13.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart13.svg";
import Bag from "../../../public/Images/SidebarIMG/Bag.svg";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import Go from '../../../public/Images/SidebarIMG/Go.png';
import SidebarHeader from "./SidebarHeader";

function Wishlist({closeModal}) {
  return (
    <>
    <div className="sidebar-wrapper"  onClick={closeModal}></div>
      <div className="sidebar-container flex justify-end">
        <div className="profile">
          {/* <div className="icons">
            <a href="./page37.html">
              <Image src={Profile} alt="user" />
            </a>
            <a href="./page37.html">
              <Image src={Heart} alt="heart" />
            </a>
            <a href="./page37.html">
              <Image src={Bag} alt="bag" />
            </a>
          </div> */}
          <SidebarHeader user={Profile} heart={Heart} bag={Bag} />
          <div className="wishlist">
            <div className="title">
              <Link href={"../Login/Login"}>
                Log In
               <Image src={Go} className="w-[16px] h-[10px]"/>
              </Link>
              <h1>Wishlist</h1> 
          
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
                    <a href="#">Add to Bag</a>
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
                    <a href="#">Add to Bag</a>
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
                    <a href="#">Add to Bag</a>
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
                    <a href="#">Add to Bag</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="button">
            <Link href={"../WishlistP/WishlistP"} legacyBehavior><a>Go to Wishlist</a></Link>
          </div>
        </div>
      </div>
      </>
  );
}

export default Wishlist;
