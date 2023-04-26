
import Footer2 from "@/Components/Footer-2/Footer2"
import Header3 from "@/Components/Header-3/Header3"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Go from "../../../public/Images/SidebarIMG/Go.png"
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg"

const Payment23 = () => {
  return (
    <>
      <Header3 />
      <div className="select-addres">
        <div className="addres-billing lapl:gap-12 gap-7">
          <div  className="payment-method">
            <h1>Payment Method</h1>
            <div className="payment-jm-cash flex justify-between items-center">
              <div className="flex gap-5">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="jm-cash-title">
                  <p>JM Cash</p>
                  <span>
                    Balance: ₹ 1,000
                  </span>
                </div>
              </div>
              <div className="jmcash-icon">
                <p>
                  <span>JM</span>
                  <br />
                  &nbsp;CASH
                </p>
              </div>
            </div>
          </div>
          <div className="pay-remaing">
            <div className="pay-amout flex items-center justify-between">
            <h1>Pay remaining amount with</h1>
            <h1>₹ 10,000.00</h1>
            </div>
            <div className="upi flex flex-col">
                <div className="input-label">
                    <input type="radio" />
                    <label>UPI</label>
                </div>
                <div className="input-label">
                    <input type="radio" />
                    <label>Wallets</label>
                </div>
                <div className="input-label">
                    <input type="radio" />
                    <label>Credit/Debit/ATM Card</label>
                </div>
                <div className="input-label">
                    <input type="radio" />
                    <label>EMI (Easy Installments)</label>
                </div>
                <div className="input-label">
                    <input type="radio" />
                    <label>Cash on Delivery</label>
                </div>
            </div>
          </div>
        </div>
        <div className="edit-bag">
          <div className="edit-bag-icon">
            <Image src={Go} alt='go' className="w-[16px] h-[10px] rotate-180" />
            Edit Bag
          </div>
          <div className="flex flex-col gap-2 edit-bag-fresh">
            <div className="flex">
              <div>
                <Image src={ring} alt='ring' className="w-[79px] h-[79px] replace" />
              </div>
              <div className="edit-bag-title flex flex-col justify-center gap-3 w-[100%]">
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
            <div className="flex">
              <div>
                <Image src={ring} alt='ring' className="w-[79px] h-[79px] replace" />
              </div>
              <div className="edit-bag-title flex flex-col justify-center gap-3 w-[100%]">
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
            <h1>
              Order Summery <span> (2 Product) </span>{" "}
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹ 50,000</p>
              </div>
              <div className="flex justify-between">
                <p>MJP Credits</p>
                <span>Redeem</span>
              </div>
              <div className="flex justify-between">
                <p>JM Benefits</p>
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
            <Link href={"../Shipping_Bag/Bag_2"} className="edit-bag-btn">
              <button>Continue</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Payment23
