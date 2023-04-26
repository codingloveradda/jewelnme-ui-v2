import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import SaveAdress from "@/Components/Dashboard/SaveAdress";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MySavedAddress = () => {
  return (
    <>
      <Header />
      <Nav name="/ Saved Addresses" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name="Saved Addresses" />
          <div className="default-address">
            <h1>Default Address</h1>
          </div>
          <SaveAdress />
          <div className="default-border">
            <h5></h5>
          </div>
          <SaveAdress name="Make this Default" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MySavedAddress;
