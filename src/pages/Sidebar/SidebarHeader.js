import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";


const SidebarHeader = ({ user, heart, bag }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
    
    
    <div className="sidebar-icons">
      <Image src={user} alt="user" onClick={() => setShowProfile(true)} />
      {showProfile && <Profile closeModal={() => setShowProfile(false)} />}

      <Link href={"../Sidebar/WishlistEmpty"}>
        <Image src={heart} alt="heart" />
      </Link>
      <Link href={"../Sidebar/BagEmpty"}>
        <Image src={bag} alt="bag" />
      </Link>
    </div>
    </>
  );
};

export default SidebarHeader;
