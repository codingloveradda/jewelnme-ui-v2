
import Image from "next/image";
import Link from "next/link";
import Profile from "../../../public/Images/SidebarIMG/Profile13.svg";
import Heart from "../../../public/Images/SidebarIMG/Heart13.svg";
import Bag from "../../../public/Images/SidebarIMG/Bag.svg";
import Wistlist from '../../../public/Images/SidebarIMG/Heart.png';
import Go from '../../../public/Images/SidebarIMG/Go.png';
import SidebarHeader from "./SidebarHeader";

const WishlistEmpty =()=> {
    return (
        <div className="flex justify-end">
        <div className="profile">
          <SidebarHeader user={Profile} heart={Heart} bag={Bag}/>
          <div className="wishlist">
            <div className="title">
              <Link href={"../Login//Login"}>
                Log In
                <Image  src={Go} className="w-[16px] h-[10px]"/>
              </Link>
            </div>
            <div className='wishlistEmpty'>
              <div className='image'>
               <Image src={Wistlist}/>
               <div className='box'></div>
              </div>
              <div className='wishlist-content gap-[25px]'>
                <h1>Your wishlist is empty!</h1>
                <p>Add items that you like to your wishlist. Review them anytime and easilyBag_3move them to the bag.</p>
              </div>
              <div className='wishlist-btn mt-10'>
                <Link href={"/"}>Continue Shopping</Link>
              </div>

            </div>
          </div>
        </div>
        </div>
    );
}

export default WishlistEmpty;