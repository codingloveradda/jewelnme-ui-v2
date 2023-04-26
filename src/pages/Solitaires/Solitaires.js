import React, { useState } from "react";
import Image from "next/image";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SolitairesBGIMG from "../../../public/Images/Banner_Pages/SolitairesBG.png";
import ShapePrice from "@/Components/SolitairesC/ShapePrice";
import cancle from "../../../public/Images/Profile_Services/Cancle.png";
import round from "../../../public/Images/Header/Solitaires/group/round.png";
import heart from "../../../public/Images/SidebarIMG/Heart.png";
import drop from "../../../public/Images/Dashboard/Drop.png";
import Tabs from "@/Components/SolitairesC/Tabs";
import DiamondCarat from "@/Components/SolitairesC/DiamondCarat";
import OtherFilter from "@/Components/SolitairesC/OtherFilter";

function Solitaires() {
   const tabs = [
      { label: 'Shape & Price', content: <ShapePrice/> },
      { label: '4Cs (Carat, Color, Clarity & Cut)', content: <DiamondCarat/> },
      { label: 'Other Filters', content: <OtherFilter/> },
    ];

  return (
    <>
      <Header />

      {/* BreadCrum Menu  */}
      <div className="bag-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">/ Solitaires</a>
          </li>
        </ul>
      </div>
      {/* Solitaires Banner  */}
      <div
        className="h-[550px]"
        style={{
          backgroundImage: `url(${SolitairesBGIMG.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="solitaires-para">
        <p>
          Giving a jewel is always special. "Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Filter navigation itmes */}
      <div className="solitaries-filter">      
        <Tabs tabs={tabs} />
      </div>

      {/* <div className="drop-down flex flex-col items-center">
        <button onClick={toggleComponent}>
          <Image src={drop} />
        </button>
        <div className="w-full"> {showComponent && <ShapePrice />}</div>
      </div> */}

      {/* clear-filter-button */}
      <div className="clear-filter">
        <div className="btn-img">
          <button>Clear Filters</button>
          <Image src={cancle} className="w-[16px] h-[16px]" />
        </div>
      </div>

      <div className="diamond-table">
        {/* Diamond Table */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Shape</th>
              <th>Carat</th>
              <th>Color</th>
              <th>Clarity</th>
              <th>Cut</th>
              <th>Report</th>
              <th>Price </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
            <tr class="border-b text-sm">
              <td class="flex justify-center">
                <Image src={round} className="w-[50px]" alt="daimond" />
              </td>
              <td>Round</td>
              <td>0.35</td>
              <td>J</td>
              <td>SI1</td>
              <td>Excellent</td>
              <td>GIA</td>
              <td>₹ 25,000</td>
              <td>
                <Image src={heart} className="w-[24px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Solitaires;
