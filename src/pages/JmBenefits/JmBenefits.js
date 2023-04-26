import Jmcash from "@/Components/Dashboard/Jmcash";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import React from "react";
import Image from "next/image";
// import drop from "../../../public/Images/Dashboard/Drop.png";
import Table from "@/Components/Dashboard/Table";
import Jmbenefits from "@/Components/Dashboard/Jmbenefits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { BsChevronDown} from "react-icons/bs";


const JmBenefits = () => {
  return (
    <div>
      <Header />
      <Nav name="/ JM Points" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name="JM Benefits" />
          <div>
            <Jmcash name="JM Points" />
            <div className="transaction-icon">
              <div className="trans-icon">
              <span>Transaction History</span>
              {/* <Image src={drop} className="w-[16px] h-[10px]" /> */}
              <BsChevronDown />
              </div>  
              <div className="jmpoint-table">
                <Table />
              </div>
            </div>
          </div>
          <div>
            <Jmcash name="JM Credits" />
            <div className="transaction-icon">
              <div className="trans-icon">
              <span>Transaction History</span>
              <Image src={drop} className="w-[16px] h-[10px]" />
              </div>  
              <div className="jmpoint-table">
                <Table />
              </div>
            </div>
          </div>
          <div className="jmcoup">
          <p>JM Coupons</p>
          </div>
          <Jmbenefits name="20" />
          <Jmbenefits name="20" />
          <Jmbenefits name="10" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JmBenefits;
