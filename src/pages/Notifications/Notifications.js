import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import NotificationComponent from "@/Components/Dashboard/NotificationComponent";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Notifications() {
  return (
    <div>
      <Header />
      <Nav name="/ Notifications"/>
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name="Notifications"/>
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notifications;
