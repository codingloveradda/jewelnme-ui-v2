import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Profile from "../../../public/Images/SidebarIMG/Profile13.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart.svg";
import Bag from "../../../public/Images/SidebarIMG/bag.png";
import bagEmpty from '../../../public/Images/SidebarIMG/Bag.png';
import Go from '../../../public/Images/SidebarIMG/Go.png';
import SidebarHeader from './SidebarHeader';


const BagEmpty=()=> {
    return (
        <div className="flex justify-end">
        <div className="profile">
        
          <SidebarHeader user={Profile} heart={Heart} bag={Bag}/>
          <div className="wishlist">
            <div className="title">
              <Link href={"../Login/Login"}>
                Log In
               <Image src={Go} alt="next" className="w-[16px] h-[10px]"/>
              </Link>
            </div>
            <div className='wishlistEmpty'>
              <div className='image'>
               <Image src={bagEmpty} alt="bag"/>
               <div className='box'></div>
              </div>
              <div className='wishlist-content bag-content gap-[10px] text-center'>
                <h1>Hey, it feels so light!</h1>
                <p>There is nothing in your bag. Let's add some Jewels.</p>
              </div>
              <div className='wishlist-btn mt-10'>
                <a>Add Items From Wishlist</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
}

export default BagEmpty;