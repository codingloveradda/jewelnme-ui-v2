import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import User from "../../../public/Images/SidebarIMG/Profile.svg";
import heart from "../../../public/Images/SidebarIMG/Heart13.svg";
import dashboard from "../../../public/Images/Dashboard/dashboard.png";
import information from "../../../public/Images/Dashboard/information.png";
import cash from "../../../public/Images/Dashboard/cash.png";
import jewel_plan from "../../../public/Images/Dashboard/jewel_plan.png";
import benefits from "../../../public/Images/Dashboard/benefits.png";
import references from "../../../public/Images/Dashboard/references.png";
import order from "../../../public/Images/Dashboard/order.png";
import notifications from "../../../public/Images/Dashboard/notifications.png";
import logout from "../../../public/Images/Dashboard/logout.png";

const MainDashboard=()=> {
    return (
        <div className="main-dashboard">
        <div className="dashboard-content">
          <div className="content-img">
            <div className="">
              <Image src={User} alt='profile' className="bg-[#192537] w-[80px]" />
            </div>
            <div className="content">
              <p>Hello,</p>
              <p className="mt-[-5px]">Rachel Green</p>
              <p>00000000</p>
            </div>
          </div>
          <div className="content-img">
            <div className="">
              <Image
                src={heart} alt='heart'
                className="bg-[#F9F9F9] text-[#777D85] w-[80px]"
              />
            </div>
            <div className="content">
              <p>
                <span> My Relationship Manager </span>
              </p>
              <p>Priti Chawla, 91 000 000 0000</p>
            </div>
          </div>
          <div className="main-other flex items-center gap-4">
            <p className='text-sm'>We know each other since 06-09-2019</p>
            <span className='w-[120px] h-[16px] bg-[#F9F9F9]'></span>
          </div>
        </div>
        <div className="dashboard-deatils">
          <Link href={"../MyDashboard/MyDashboard"} className="myDashboard">
            <Image src={dashboard} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>My Dashboard</p>
          </Link>
          <Link href={"../MyInformation/MyInformation"} className="myDashboard">
            <Image src={information} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>My Information</p>
          </Link>
          <Link href={"../JmCash/JmCash"} className="myDashboard">
            <Image src={cash} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>JM Cash</p>
          </Link>
          <Link href={"../MyJewelPlan/MyJewelPlan"} className="myDashboard">
            <Image src={jewel_plan} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>My Jewel Plan</p>
          </Link>
          <Link href={"../JmBenefits/JmBenefits"} className="myDashboard">
            <Image src={benefits} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>JM Benefits</p>
          </Link>
          <Link href={"../MyRefernces/MyRefernces"} className="myDashboard">
            <Image src={references} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>My References</p>
          </Link>
          <Link href={"../MyOrder/MyOrder"} className="myDashboard">
            <Image src={order} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>My Orders</p>
          </Link>
          <Link href={"../Notifications/Notifications"} className="myDashboard">
            <Image
              src={notifications}
              alt="dashboard"
              className="w-[22px] h-[22px]"
            />
            <p>Notifications</p>
          </Link>
          <Link href={"/"} className="myDashboard">
            <Image src={logout} alt="dashboard" className="w-[22px] h-[22px]" />
            <p>Logout</p>
          </Link>
        </div>
      </div>
    );
}

export default MainDashboard;