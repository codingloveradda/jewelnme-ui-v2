import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import MyOrderBtn from "@/Components/Dashboard/MyOrderBtn";
import MyOrderComponent from "@/Components/Dashboard/MyOrderComponent";
import Nav from "@/Components/Dashboard/Nav";

import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MyOrder = () => {
  return (
    <>
      <Header />
      <Nav name="/ My Orders" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name=" My Orders" />
          <Link href={"../OrdersDetails/OrdersDetails"}><MyOrderComponent /></Link>

          <MyOrderBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrder;
