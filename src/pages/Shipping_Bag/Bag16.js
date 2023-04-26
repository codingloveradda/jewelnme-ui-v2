import Footer from "../Footer/Footer";
import Header3 from "@/Components/Header-3/Header3";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import coupon from "../../../public/Images/Coupon/Coupon.png";
import gift from "../../../public/Images/Coupon/gift.png";
import { BsInfoCircle, BsChevronDown} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";


const Bag16=()=> {

  const [showCoupon, setShowCoupon] = useState(false)
  return (
    <>
      <Header3 />
      <div className="select-addres mb-96">
        <div className="bag_16">
          <div className="bag-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">/ Bag</a>
              </li>
            </ul>
          </div>
          <div className="bag_title">
            <h1>Bag</h1>
          </div>
          <div className="bag_img flex">
            <div className="flex w-full">
              <div className="fresh-img  replace">
                <Image src={ring} alt="ring" className="rounded-xl" />
              </div>
              <div className="flex flex-col gap-10 bag_16-fresh">
                <div className="bag_16-fresh_title">
                  <div className="flex items-center justify-between">
                    <p>
                      Arcana Fresh Diamond Studs
                      <span> URX1GX15 </span>
                    </p>
                    <RxCross2 />
                  </div>
                  <p>₹ 45,522.45</p>
                </div>

                <div className="flex gap-14">
                  <div className="drop-down-bag ">
                    <div className="flex items-center gap-3">
                    <p>Diamond/Stone Info.:</p>
                    <BsChevronDown />
                    </div>
                    <table>
                     <tbody>
                       <tr>
                        <td>Shape</td>
                        <td>:</td>
                        <td>Round</td>
                       </tr>
                       <tr>
                        <td>Cut</td>
                        <td>:</td>
                        <td>Exellent</td>
                       </tr>
                       <tr>
                        <td>Color</td>
                        <td>:</td>
                        <td>I - J</td>
                       </tr>
                       <tr>
                        <td>Clarity</td>
                        <td>:</td>
                        <td>VS - SI</td>
                       </tr>
                       <tr>
                        <td>Carat</td>
                        <td>:</td>
                        <td>3.50</td>
                       </tr>
                       <tr>
                        <td>Pieces</td>
                        <td>:</td>
                        <td>20</td>
                       </tr>
                     </tbody>
                    </table>
                  </div>
                 
                  <div className="drop-down-bag ">
                    <div className="flex items-center gap-3">
                    <p>Metal Info.:</p>
                    <BsChevronDown />
                    </div>
                    <table>
                     <tbody>
                       <tr>
                        <td>Metal</td>
                        <td>:</td>
                        <td>Gold</td>
                       </tr>
                       <tr>
                        <td>Tone</td>
                        <td>:</td>
                        <td>White</td>
                       </tr>
                       <tr>
                        <td>Purity</td>
                        <td>:</td>
                        <td>18K</td>
                       </tr>
                       <tr>
                        <td>Wieght</td>
                        <td>:</td>
                        <td>5.00gm</td>
                       </tr>
                     
                     </tbody>
                    </table>
                  </div>
                  <div className="drop-down-bag ">
                    <div className="flex items-center gap-3">
                    <p>Other Info.:</p>
                    <BsChevronDown />
                    </div>
                    <table>
                     <tbody>
                       <tr>
                        <td>Setting</td>
                        <td>:</td>
                        <td>Prong</td>
                       </tr>
                     </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-5 bag-16-btn ">
                    <button>Size </button>
                    <p>05</p>
                    <BsChevronDown />

                  </div>
                  <div className="flex items-center gap-5 bag-16-btn ">
                    <button>Size </button>
                    <p>05</p>
                    <BsChevronDown />

                  </div>
                  <div className="flex items-end ">
                    <a href="#" className="decoration-solid">Add to Wishlist</a>
                  </div>
                  <div className="flex flex-col">
                    <p>Delivery by</p>
                    <p>13 June 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit-bag">
          <div className="bag-gift flex gap-4">
            <Image src={gift} />
            <div className="flex flex-col gap-3 justify-center">
              <h2>Buying for a loved one?</h2>
              <p>Gift wrap and personalized message on card</p>
              <span>Add Gift Wrap</span>
            </div>
          </div>
          <div className="bag-jm-btn flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src={coupon} className="h-[25px] w-[23px]" />
              <h1>JM Benefits</h1>
            </div>
            <div onClick={() => setShowCoupon(true)}>
               <button>Apply</button>
             </div>
             {showCoupon && <ApplyCoupon2 closeModal={() => setShowCoupon(false)} />}

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
      <Footer />
    </>
  );
}

export default Bag16;
