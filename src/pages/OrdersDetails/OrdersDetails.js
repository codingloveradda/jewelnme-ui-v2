import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Image from "next/image";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";
import add from "../../../public/Images/Dashboard/add.png"
import MyOrderBtn from "@/Components/Dashboard/MyOrderBtn";

const OrdersDetails = () => {
  const [showClean, setShowClean] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showRepair, setShowRepair] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  return (
    <>
      <Header />
      <Nav name="/ My Orders" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name="Orders Deatils" />
          <div className="my-order-1 flex gap-[50px] w-full">
            <div className="my-order-left  flex flex-col gap-[15px]">
              <div className="summery flex flex-col gap-3">
                <p>
                  Summary No: <span>00000000000</span>
                </p>
                <p>Bill No: 000000000000</p>
                <p>Bill Date: DD/MMM/YYYY</p>
                <p>Occasion: Engagement</p>
                <button>Download Invoice</button>
              </div>
              <div className="order-summery flex flex-col">
                <h3>Order Summery</h3>
                <div className="flex justify-between mb-3">
                  <p>MRP</p>
                  h3<p>₹ 50,000</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p>MJP Credits</p>
                  <p>Redeem</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p>JM Benefits</p>
                  <p>Apply</p>
                </div>
                <div className="flex justify-between mb-6">
                  <p>JM Credits</p>
                  <p>Apply</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div className="flex justify-between mt-3">
                  <h2>Total Amount</h2>
                  <h2>₹ 50,000.00</h2>
                </div>
              </div>
              <div className="payment-method flex flex-col">
                <h3>Payment Method</h3>
                <div className="flex flex-col gap-1">
                  <p>Online</p>
                  <p>MJP Redemption</p>
                </div>
              </div>
              <div className="delivery-addres flex flex-col">
                <h3>Delivery Address</h3>
                <p>john Deo</p>
                <p>#2563, Landmark 000000</p>
                <p>Sector OO City Name</p>
                <p>State Name,Pincode 0000000</p>
                <p className="mt-3">Mobile No: +91 000000000</p>
              </div>
            </div>
            <div className="my-order-right flex flex-col gap-7">
              <h1>
                Arcana Fresh Diamond Studs -
                <span>URX1GX15</span>
              </h1>
              <div className="flex justify-between">
                <div className="w-[250px] replace">
                  <Image  src={ring} alt="ring" />
                </div>
                <div className="my-order-right-btn flex flex-col justify-center items-center gap-3">
                  <button onClick={() => setShowClean(true)} className="px-10 py-2">Clean My Jewel</button>
                  {showClean && <Clean closeModal={() => setShowClean(false)} />}

                  <button onClick={() => setShowCustomize(true)} className="px-6 py-2">Customize My Jewel</button>
                  {showCustomize && <Customize closeModal={() => setShowCustomize(false)} />}

                  <button onClick={() => setShowRepair(true)} className="px-[37px] py-2">Repair My Jewel</button>
                  {showRepair && <Repair closeModal={() => setShowRepair(false)} />}

                  <button onClick={() => setShowExchange(true)} className="px-[26px] py-2">Exchange My Jewel</button>
                  {showExchange && <Exchange closeModal={() => setShowExchange(false)} />}

                </div>
              </div>
              <div className="product-detail flex flex-col">
                <div className="product-deatil-1 py-3.5 px-2">
                  <div className="flex justify-between items-center w-full">
                    <p >Product Details:</p>
                    <Image src={add}  className="w-[14px] h-[14px]"/>
                  </div>
                  <table className="Product-table">
                    <tbody>
                     <tr>
                        <td>Gross Weight (Approx)</td>
                        <td >4.5450</td>
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
                <div className="product-deatil-1 flex items-center justify-between py-3.5 px-2">
                  <p >Stone Details:</p>
                  <Image src={add}  className="w-[16px]"/>
                </div>
                <div className="product-deatil-1 py-3.5 px-2">
                  <div className="flex justify-between items-center w-full">
                    <p >Metal Details:</p>
                    <Image src={add}  className="w-[14px] h-[14px]"/>
                  </div>
                  <table className="Metal-table">
                    <thead>
                     <tr>
                        <th>Metal Type</th>
                        <th >Tone </th>
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
                    <p >Price Breakup:</p>
                    <Image src={add}  className="w-[14px] h-[14px]"/>
                  </div>
                  <table className="Price-table">
                    <tbody>
                     <tr>
                        <td>Metal</td>
                        <td >₹18,190.05</td>
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

              <div className="order-confim">
                  <div className="order-details flex justify-between">
                    <p>Order Confirmed</p>
                    <p>Dispatched</p>
                    <p>Out For Delivery</p>
                    <p>Delivered</p>
                  </div>
                  <div className="absolute top-[78px] left-[111px]">
                    <div className="order-process-bar absolute w-[100%] h-[50%] top-[5px]">
                      <div className="absolute w-0 h-[100%]"></div>
                    </div>
                    <div className=" flex justify-between w-[550px] h-[1px]">
                      <div className=" z-10 rounded-full h-[14px] w-[14px] bg-[#A18A66]">
                        <p className="text-xl font-semibold text-white"></p>
                      </div>
                      <div className=" z-10 rounded-full h-[14px] w-[14px] bg-[#A18A66]">
                        <p className="text-xl font-semibold text-white"></p>
                      </div>
                      <div className="z-10 rounded-full h-[14px] w-[14px] bg-[#A18A66]">
                        <p className="text-xl font-semibold text-white"></p>
                      </div>
                      <div className="z-10 rounded-full h-[14px] w-[14px] bg-[#A18A66]">
                        <p className="text-xl font-semibold text-white"></p>
                      </div>
                    </div>
                  </div>
                  <div className="order-date flex justify-between">
                    <p>Fri, 26th Aug</p>
                    <p>Fri, 26th Aug</p>
                    <p>Fri, 26th Aug</p>
                    <p>Fri, 26th Aug</p>
                  </div>
                  <div className="absolute top-[115px] left-[120px]">
                    <div className="order-process-bar-2 absolute w-[100%] h-[50%] top-[38px]">
                      <div className="absolute w-0 h-[100%]"></div>
                    </div>
                    <div className=" flex justify-between w-[550px] h-[1px]">
                      <div className=" bg-[#777D85]">
                        <p className="text-xl font-semibold text-white"></p>
                      </div>
                    </div>
                  </div>
                  <div className="order-item flex flex-col items-center gap-3">
                    <h2>
                      Your item has been picked up by courier panter
                    </h2>
                    <div className="flex gap-[50px]">
                      <p> Fri, 8th Jul </p>
                      <p>10:38 pm</p>
                      <p>Your Order has been placed.</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p> Fri, 8th Jul </p>
                      <p>10:38 pm</p>
                      <p>Your Order has been placed.</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p> Fri, 8th Jul </p>
                      <p>10:38 pm</p>
                      <p>Your Order has been placed.</p>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersDetails;
