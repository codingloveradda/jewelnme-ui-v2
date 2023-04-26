import Footer2 from "@/Components/Footer-2/Footer2";
import Header2 from "@/Components/Header-2/Header2";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import done from "../../../public/Images/Bag/Done.png";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";

import {BsInfoCircle} from "react-icons/bs"


const Bag_3 = () => {
  return (
    <>
      <Header2 />
      <div className="bag-2">
        <div>
          <Image src={done} className="w-[55px]" />
        </div>
        <h1>Order Confirmed!</h1>
        <p>
          Thank you for shopping with Jewelnme. Updates of your order will be
          sent to Email <br /> geos here
        </p>
        <span>
          You order should reach by 13 July. Sit tight, your jewel is on its
          way!
        </span>
        <div className="delivering ">
          <span>Delivering To:</span>
          <h2>John Deo | +91 000 000 0000</h2>
          <p>
            #2563, Landmark 0000000, Sector 00, City Name, State Name, Pincode
            000000
          </p>
        </div>
        <div className='flex gap-5'>
          <Link href={"../Shipping_Bag/Bag_2"} className='bag-2-btn'>
            <button>Hide Order Summary</button>
          </Link>
          <Link href={"/"} className='bag-2-btn'>
            <button>Continue Shopping</button>
          </Link>
        </div>
        <div className="bag-3-fresh">

          <div className="bag-3-fresh-deatils">

            <div className="flex gap-[17px] w-[547px]">
              <div>
                <Image src={ring} class="w-[79px] h-[79px] replace" />
              </div>
              <div className="bag-3-fresh-title flex flex-col justify-center gap-3 w-[100%]">
                <div>
                  <p>
                    Arcana Fresh Diamond Studs -<span> URX1GX15 </span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className=" flex  gap-10">
                    <p>Qty: 01</p>
                    <p>Size: 05</p>
                  </div>
                  <div>
                    <p>₹ 12,000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[17px] w-[547px]">
              <div>
                <Image src={ring} class="w-[79px] h-[79px] replace" />
              </div>
              <div className="bag-3-fresh-title flex flex-col justify-center gap-3 w-[100%]">
                <div>
                  <p>
                    Arcana Fresh Diamond Studs -<span> URX1GX15 </span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className=" flex  gap-10">
                    <p>Qty: 01</p>
                    <p>Size: 05</p>
                  </div>
                  <div>
                    <p>₹ 12,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bag-3-amount flex flex-col gap-7">
            <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                  <p>Subtotal</p>
                  <BsInfoCircle className="text-[#a18a66]"/>
                  </div>
                  <p>₹ 50,000</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                  <p>MJP Credits</p>
                  <BsInfoCircle className="text-[#a18a66]"/>
                  </div>
                  <span>Redeem</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                  <p>JM Benefits</p>
                  <BsInfoCircle className="text-[#a18a66]"/>
                  </div>
                  <span>Apply</span>
                </div>
            </div>
            <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                  <p>Subtotal</p>
                  <BsInfoCircle className="text-[#a18a66]"/>
                  </div>
                  <p>Free</p>
                </div>
            <div className="flex justify-between payable">
              <h2>Net Payable Amount</h2>
              <h2>₹ 50,000.00</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Bag_3;
