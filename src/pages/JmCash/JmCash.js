import Jmcash from "@/Components/Dashboard/Jmcash";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import Table from "@/Components/Dashboard/Table";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const JmCash = () => {
  return (
    <div>
      <Header />
      <Nav name="/ JM Cash" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
        <MainName name="JM Cash" />
        <Jmcash name="JM Cash"/>
        <div className="jmcash-transaction-history">
         <p>Transaction History</p>
        </div>
        <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JmCash;
