import Jmcash from "@/Components/Dashboard/Jmcash";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import drop from "../../../public/Images/Dashboard/Drop.png";
import Image from "next/image";
import React from "react";
import Table from "@/Components/Dashboard/Table";
import CommonPlan from "@/Components/Dashboard/CommonPlan";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MyJewelPlan = () => {
  return (
    <>
      <Header />
      <Nav name="/ My Jewel Plan" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name=" My Jewel Plan" />
          <div>
            <Jmcash name="JM Points" />
            <div className="transaction-icon">
              <div className="trans-icon">
                <span>Transaction History</span>
                <Image src={drop} alt="drop" className="w-[16px] h-[10px]" />
              </div>
              <div className="jmpoint-table">
                <Table />
              </div>
            </div>
          </div>
          <CommonPlan />

          <div className="matured-plan">
            <div className="matured">
            <p>Matured Plans</p>
            <Image src={drop} alt="drop" className="w-[16px] h-[10px]" />
            </div>
            <div className="common-ho">
               <CommonPlan />
            </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyJewelPlan;
