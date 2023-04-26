import React, { useState } from "react";
import Link from "next/link";
import User from "../../../public/Images/SidebarIMG/Profile.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart.svg";
import Bag from "../../../public/Images/SidebarIMG/Bag.svg";
import SidebarHeader from "./SidebarHeader";


function Profile() {

    
  return (
    
      <div className="flex justify-end">
        <div className="profile">
          <SidebarHeader user={User} heart={Heart} bag={Bag} />
          <div className="profile-content">
            <div className="profile-detail">
              <h1>
                Log In or Register for a New Account
              </h1>
              <p>
                With an account you can check out faster, view your online order
                history and access your shopping bag or saved items from any
                device.
              </p>
            </div>

            <div className="button">
              <Link href={"../Login/Login"}>
                Log In
              </Link>
              <Link href={"../SignUp/SignUp"}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Profile;
