import Image from "next/image";
import User from "../../../public/Images/SidebarIMG/Profile.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart.svg";
import Bag from "../../../public/Images/SidebarIMG/Bag.svg";


import SidebarHeader from "./SidebarHeader";
import SidebarDashboard from "./SidebarDashboard";

const Dashboard = () => {
  return (
    <div className="flex justify-end">
      <div className="profile">
        
        <SidebarHeader user={User} heart={Heart} bag={Bag}/>
        {/* <div className="dashboard">
          <div className="dashboard-content">
            <div className="content-img">
              <div className="">
                <Image src={User} className="bg-[#192537] w-[80px]" />
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
                  src={heart}
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
            <div className="other">
              <p>We know each other since 06-09-2019</p>
              <span></span>
            </div>
          </div>
          <div className="dashboard-deatils">
            <div className="myDashboard">
              <Image
                src={dashboard}
                alt="dashboard"
                className="w-[22px] h-[22px]"
              />
              <p>My Dashboard</p>
            </div>
            <div className="myDashboard">
              <Image
                src={information}
                alt="dashboard"
                className="w-[22px] h-[22px]"
              />
              <p>My Information</p>
            </div>
            <div className="myDashboard">
              <Image src={cash} alt="dashboard" className="w-[22px] h-[22px]" />
              <p>JM Cash</p>
            </div>
            <div className="myDashboard">
              <Image
                src={jewel_plan}
                alt="dashboard"
                className="w-[22px] h-[22px]"
              />
              <p>My Jewel Plan</p>
            </div>
            <div className="myDashboard">
              <Image src={benefits} alt="dashboard" className="w-[22px] h-[22px]" />
              <p>JM Benefits</p>
            </div>
            <div className="myDashboard">
              <Image
                src={references}
                alt="dashboard"
                className="w-[22px] h-[22px]"
              />
              <p>My References</p>
            </div>
            <div className="myDashboard">
              <Image src={order} alt="dashboard" className="w-[22px] h-[22px]" />
              <p>My Orders</p>
            </div>
            <div className="myDashboard">
              <Image
                src={notifications}
                alt="dashboard"
                className="w-[22px] h-[22px]"
              />
              <p>Notifications</p>
            </div>
            <div className="myDashboard">
              <Image src={logout} alt="dashboard" className="w-[22px] h-[22px]" />
              <p>Logout</p>
            </div>
          </div>
        </div> */}
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
