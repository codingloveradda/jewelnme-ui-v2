import React, { useState } from "react";
import Image from "next/image";
import heart from "../../../public/Images/SidebarIMG/Heart.png";
import share from "../../../public/Images/Icons/Share.png";
import Dring from "../../../public/Images/Buy_With_MJP/D.png";
import free from "../../../public/Images/page-9/Web/free.png";
import hallmarked from "../../../public/Images/page-9/Web/hallmarked.png";
import jewlnmwar from "../../../public/Images/page-9/Web/warranty.png";
import moneyback from "../../../public/Images/page-9/Web/back.png";
import lifetime from "../../../public/Images/page-9/Web/exchange.png";
import mjp from "../../../public/Images/page-9/Web/mjp.png";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Buy_MJP from "../Buy_With_MJP/Buy_MJP";

function Product_Detail() {
  const [buyWithMjp, setBuyWithMjp] = useState(false);

  return (
    <div className="product-detail flex gap-[80px]">
      <div className="product-detail-right">
        <div className="prodtuct-detail-nav">
          <ul>
            <li>Home</li>
            <li>/ Rings</li>
            <li>/ All Rings</li>
          </ul>
        </div>
        <div className="mt-4">
          <span>FR5D1GX1</span>
        </div>
        <div className="flex justify-between items-center product-detail-added mt-3">
          <h1>Added Sparkle Ring</h1>
          <div className="flex gap-[50px] items-center">
            <Image
              src={share}
              className="laps:w-[26px] laps:h-[25px] w-[20px] h-[18px] "
            />
            <Image
              src={heart}
              className="laps:w-[26px] laps:h-[25px] w-[20px] h-[18px] "
            />
          </div>
        </div>
        <div className="product-detail-para mt-3">
          <p>
            Giving a jewel is always special. "Lorem ipsum dolor sit
            <br /> amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="product-detail-price flex flex-col gap-[15px] mt-3">
          <h2>₹ 45,522.45</h2>
          <p>Price Range: ₹ 45,522.45 - ₹ 60,452.45</p>
        </div>
        <div
          className="product-detail-start-icon flex items-center gap-[14px] mt-5"
          onClick={() => setBuyWithMjp(true)}
        >
          <span>Start MJP</span>
          <span className="mb-1 font-semibold">
            <BsArrowRight />
          </span>
          {buyWithMjp && <Buy_MJP />}
        </div>
        <div className="mt-7">
          <div className="product-detail-hover">
            <h3>Size:</h3>
            <span>
              <AiOutlinePlus />
            </span>
            <div className="hovereffect flex flex-col gap-5 mt-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex">
                  <button>-</button>
                  <div className="flex items-center flex-col gap-2">
                    <input type="text" className="w-[50px]" value="13" />
                    <p>On Order</p>
                  </div>
                  <button>+</button>
                </div>
                <div className="text-[#a18a66] flex items-center gap-4">
                  <h4>Size Chart</h4>
                  <BsArrowRight />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="11" />
                  <p>Only 2 left</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="14" />
                  <p>Only 1 left</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="17" />
                  <p>In Stock</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="24" />
                  <p>In Stock</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-hover">
            <h3>Metal n Purity:</h3>
            <span>
              <AiOutlinePlus />
            </span>
            <div className="hovereffect flex flex-col gap-5 mt-4">
              <div className="flex gap-5">
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Gold 22K" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Gold 18K" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Gold 14K" />
                  <p>In Stock</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="2Pt. 995" />
                  <p>Only 1 left</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-hover">
            <h3>Tone:</h3>
            <span>
              <AiOutlinePlus />
            </span>
            <div className="hovereffect flex flex-col gap-5 mt-4">
              <div className="flex gap-5">
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Y" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="W" />
                  <p>In Stock</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="R" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="W/R" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Y/W" />
                  <p>Only 1 left</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="Y/W/R" />
                  <p>On oRDER</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-hover">
            <h3>Diamond:</h3>
            <span>
              <AiOutlinePlus />
            </span>
            <div className="hovereffect flex flex-col gap-3 mt-4">
              <h4>Colour:</h4>
              <div className="flex gap-5">
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="D-E" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="E-F" />
                  <p>In Stock</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="G-H" />
                  <p>On Order</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="I-J" />
                  <p>On Order</p>
                </div>
              </div>
              <h4>Clearity:</h4>
              <div className="flex gap-5">
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="FL" />
                  <p>Only 2 left</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="VS" />
                  <p>Only 1 left</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="SI" />
                  <p>In Stock</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <input type="text" className="w-[50px]" value="I" />
                  <p>In Stock</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-hover">
            <h3>Gemstone:</h3>
            <span>
              <AiOutlinePlus />
            </span>
          </div>
          <div className="product-detail-hover">
            <h3>Pearl:</h3>
            <span>
              <AiOutlinePlus />
            </span>
          </div>
        </div>
        <div className="delivery-opt mt-8  flex flex-col gap-[20px]">
          <h2>Delivery Options</h2>
          <div className="input-date flex gap-[60px] ">
            <div className="delivery-opt-input">
              <input type="text" placeholder="Enter Pincode" />
              <BsArrowRight />
            </div>
            <div className="">
              <p className="italic">
                <span>FREE delivery </span> Monday, 12 September.
              </p>
            </div>
          </div>
          <div>
            <p>Please enter PIN code to check expected delivery date</p>
          </div>
        </div>
        <div className="icons-detal grid lapl:grid-cols-6 grid-cols-3 mt-8">
          <div className="grid  place-items-center">
            <Image src={free} className="w-[26px]" />
            <p>Free Shipping</p>
          </div>
          <div className="grid place-items-center">
            <Image src={hallmarked} className="w-[26px]" />
            <p>100% Hallmarked & Certified</p>
          </div>
          <div className="grid place-items-center">
            <Image src={jewlnmwar} className="w-[26px]" />
            <p>JEWELNME Warranty</p>
          </div>
          <div className="grid place-items-center">
            <Image src={moneyback} className="w-[26px]" />
            <p>21 Days Money-Back</p>
          </div>
          <div className="grid  place-items-center">
            <Image src={lifetime} className="w-[26px]" />
            <p>Lifetime Exchange</p>
          </div>
          <div className="grid place-items-center">
            <Image src={mjp} className="w-[26px]" />
            <p>Easy Buy with MJP</p>
          </div>
        </div>
        <div className="lapl:block hidden ">
          <h2 className="mt-10 text-xl">Additional Information:</h2>
          <div className="product-detail flex flex-col">
            <div className="product-deatil-1 py-3.5 px-2">
              <div className="flex justify-between items-center w-full">
                <p>Product Details:</p>
                  <AiOutlinePlus />
              </div>
              <table className="Product-table">
                <tbody>
                  <tr>
                    <td>Gross Weight (Approx)</td>
                    <td>4.5450</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>20.91</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>13.97</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product-deatil-1 ">
              <div className="flex items-center justify-between py-3.5 px-2">
                <p>Stone Details:</p>
             
              <AiOutlinePlus />
       
              </div>
              <div className="flex flex-col gap-3 stone-table-hov">
                <table className="stone-table">
                  <tbody>
                    <tr>
                      <td>Stone Type</td>
                      <td>Shape</td>
                      <td>Cut</td>
                      <td>Colour</td>
                      <td>Clarity</td>
                      <td>Carat</td>
                      <td>Pcs.</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}>Total Weight</td>
                      <td>0.35 Ct</td>
                    </tr>
                  </tfoot>
                </table>
                <table className="stone-table">
                  <tbody>
                    <tr>
                      <td>Stone Type</td>
                      <td>Shape</td>
                      <td>A</td>
                      <td>B</td>
                      <td>C</td>
                      <td>D</td>
                      <td>Pcs.</td>
                    </tr>
                    <tr>
                      <td>Pearl</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Pearl</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Pearl</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
                <table className="stone-table">
                  <tbody>
                    <tr>
                      <td>Stone Type</td>
                      <td>Shape</td>
                      <td>A</td>
                      <td>B</td>
                      <td>C</td>
                      <td>D</td>
                      <td>Pcs.</td>
                    </tr>
                    <tr>
                      <td>Gemstone</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Gemstone</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Gemstone</td>
                      <td>Round</td>
                      <td>Exellent</td>
                      <td>I-J</td>
                      <td>VS-SI</td>
                      <td>0.100 Ct</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="product-deatil-1 py-3.5 px-2">
              <div className="flex justify-between items-center w-full">
                <p>Metal Details:</p>
             
              <AiOutlinePlus />
   
              </div>
              <table className="Metal-table">
                <thead>
                  <tr>
                    <th>Metal Type</th>
                    <th>Tone </th>
                    <th>Purity </th>
                    <th>Weight </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gold</td>
                    <td>Gold</td>
                    <td>18K</td>
                    <td>4.476 gm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product-deatil-1 py-3.5 px-2">
              <div className="flex justify-between items-center w-full">
                <p>Price Breakup:</p>
      
              <AiOutlinePlus />
           
              </div>
              <table className="Price-table">
                <tbody>
                  <tr>
                    <td>Metal</td>
                    <td>₹18,190.05</td>
                  </tr>
                  <tr>
                    <td>Diamond</td>
                    <td>₹18,190.05</td>
                  </tr>
                  <tr>
                    <td>Making Charges</td>
                    <td>₹18,190.05</td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>₹18,190.05</td>
                  </tr>
                  <tr>
                    <td>GST (3%)</td>
                    <td>₹18,190.05</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>₹45,522.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-left mbs:hidden lapl:block">
        <div className="left-heading flex flex-col gap-2">
          <h3>Same Style Jewels</h3>
          <p>Same style available in pendant and earring</p>
        </div>
        <div className="product-scrolbar">
          <div className="product-detail-left-img  flex flex-col items-center ">
            <Image src={Dring} className="w-[140px]" />
            <span>FR5D1GX1</span>
            <p>Pendant</p>
          </div>
          <div className="product-detail-left-img  flex flex-col items-center ">
            <Image src={Dring} className="w-[140px]" />
            <span>FR5D1GX1</span>
            <p>Pendant</p>
          </div>
          <div className="product-detail-left-img  flex flex-col items-center ">
            <Image src={Dring} className="w-[140px]" />
            <span>FR5D1GX1</span>
            <p>Pendant</p>
          </div>
          <div className="product-detail-left-img  flex flex-col items-center ">
            <Image src={Dring} className="w-[140px]" />
            <span>FR5D1GX1</span>
            <p>Pendant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Detail;
