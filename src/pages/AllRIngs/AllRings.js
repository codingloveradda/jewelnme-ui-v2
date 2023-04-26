import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ringBanner from "../../../public/Images/Page-10/Banner.png";
import ProductCardP9 from "../../Components/ProductCardP9/ProductCardP9";

const AllRings = () => {
  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="BreadCrum-items bag-nav mx-[100px] mt-[30px] mb-3">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Rings</a>
          </li>
          <li>
            <a href="#">/ AllRings</a>
          </li>
        </ul>
      </div>
      <div
        className="h-[550px] z-10"
        style={{ backgroundImage: `url(${ringBanner.src})` }}
      >
        <p className="absolute top-[40%] right-[15%]  RingBanner-text">Rings</p>
      </div>

      <div className="ringbreif">
        <p>
          Giving a jewel is always special. "Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* filter section */}
      <div className="filter_section flex justify-between px-[100px] mb-[10px]">
        <div className="flex justify-between w-[450px] mb-[10px]">
          <p>
            <span className="text-[#777D85] mr-4">Filter:</span> Metal{" "}
            <span className="ml-2">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </p>
          <p>
            Gemstone{" "}
            <span className="ml-2">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </p>
          <p>
            Price{" "}
            <span className="ml-2">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </p>
        </div>
        <div>
          <p>
            <span className="text-[#777D85] mr-3">Sort:</span> Best Sellers
            &nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 my-12 gap-y-24 mx-[100px] h-[1110px] justify-items-center">
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
        <ProductCardP9 />
      </div>
      <div className="h-[650px] rings_recent_view">
        <h1 className="text-center">Recently Viewed</h1>
        <div className="grid grid-cols-4 mx-[100px]  justify-items-center">
          <ProductCardP9 />
          <ProductCardP9 />
          <ProductCardP9 />
          <ProductCardP9 />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllRings;
