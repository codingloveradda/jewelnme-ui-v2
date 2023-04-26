import Address6Component from "@/Components/Address6Component/Address6Component";
import Footer2 from "@/Components/Footer-2/Footer2";
import Header3 from "@/Components/Header-3/Header3";
import React from "react";
import Image from "next/image";
import Link from "next/link";


import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import {BsArrowLeft, BsInfoCircle} from "react-icons/bs"

const Address6 = () => {
  return (
    <>
      <Header3 />
      <div className="select-addres mb-[140px]">
        <div className="addres-billing lapl:gap-24 gap-12">
          <Address6Component name="Select Shipping Address" />
          <Address6Component name="Select Billing Address"  input="Checkbox" inputpara="I have a GST Number (Optional)" />
        </div>
        <div className="edit-bag">
          <Link href={"../Shipping_Bag/Bag16"}  className="edit-bag-icon">
           
           <BsArrowLeft />
           <h2>Edit Bag </h2>
         
          </Link>
          <div className="edit-bag-fresh">
            <div className="flex items-center">
              <div className="replace edit-bag-fresh-img">
                <Image src={ring} alt='ring'/>
              </div>
              <div className="edit-bag-title">
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
             <div className="flex items-center">
              <div className="replace edit-bag-fresh-img">
                <Image src={ring} alt='ring'/>
              </div>
              <div className="edit-bag-title">
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

            <div className="edit-bag-amount flex flex-col gap-7">
              <h1>Order Summery <span> (2 Product) </span> </h1>
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
                  <p>MJP Benefits</p>
                  <BsInfoCircle className="text-[#a18a66]"/>
                  </div>
                  <span>Apply</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between payable">
                <h2>Net Payable Amount</h2>
                <h2>₹ 50,000.00</h2>
              </div>
              <Link href={"../Shipping_Bag/Payment23"} className="edit-bag-btn"><button>Continue</button></Link>
            </div>
        
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Address6;
