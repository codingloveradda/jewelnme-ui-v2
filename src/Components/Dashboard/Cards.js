import React from "react";
import Image from "next/image";
import cash from "../../../public/Images/Dashboard/cash.png";
import credit from "../../../public/Images/Dashboard/credits.png";
import jewel_plan from "../../../public/Images/Dashboard/jewel_plan.png";

import { BsInfoCircle, BsArrowRight } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="cards-transation">
      <div className="cards">
        <div className="sub-cards">
          <div className="card">
            <div className="card-img">
              <Image src={cash} alt="my_credits" />
            </div>
            <div className="title-img">
              <h2> JM Cash </h2>

              {/* <Image src={information} alt="information" /> */}
              <BsInfoCircle className="text-[#a18a66]" />
            </div>
            <p>30,000.00</p>
            <div className="view-img">
              <a href="">View Details</a>
              {/* <Image src={Go} alt='go' className="w-[16px] h-[10px]"/> */}
              <BsArrowRight />
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <Image src={credit} alt="my_credits" />
            </div>
            <div className="title-img">
              <h2> JM Cash </h2>

              {/* <Image src={information} alt="information" /> */}
              <BsInfoCircle className="text-[#a18a66]" />
            </div>
            <p>30,000.00</p>
            <div className="view-img">
              <a href="">View Details</a>
              {/* <Image src={Go} alt='go' className="w-[16px] h-[10px]"/> */}
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="sub-cards">
          <div className="card">
            <div className="card-img">
              <Image src={credit} alt="my_credits" />
            </div>
            <div className="title-img">
              <h2> JM Cash </h2>

              {/* <Image src={information} alt="information" /> */}
              <BsInfoCircle className="text-[#a18a66]" />
            </div>
            <p>30,000.00</p>
            <div className="view-img">
              <a href="">View Details</a>
              {/* <Image src={Go} alt='go' className="w-[16px] h-[10px]"/> */}
              <BsArrowRight />
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <Image src={cash} alt="my_credits" />
            </div>
            <div className="title-img">
              <h2> JM Cash </h2>

              {/* <Image src={information} alt="information" /> */}
              <BsInfoCircle className="text-[#a18a66]" />
            </div>
            <p>30,000.00</p>
            <div className="view-img">
              <a href="">View Details</a>
              {/* <Image src={Go} alt='go' className="w-[16px] h-[10px]"/> */}
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="transation">
        <h2>Recent Transaction</h2>
        <div className="transation-table">
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-img">
                <Image src={jewel_plan} alt="jewelplan" className="w-[30px]" />
                <div className="table-detail">
                  <p>Jr/0222/20</p>
                  <span>dd-mmm-yyyy</span>
                </div>
              </div>
              <div className="price">
                <p>₹ 5000.00</p>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
