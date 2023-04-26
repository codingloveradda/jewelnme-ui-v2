import WishlistCard from '@/Components/WishlistCard/WishlistCard';
import Image from 'next/image';

import shareIcon from "../../../public/Images/Icons/Share.png";

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const WishlistP = () => {
    return (
        <>
            <Header />
            <div className="WishlistBar ">
                <h1 className="mx-[100px] mt-[30px] pb-1 text-base"><span className="text-[#777D85]">Home</span> / Wishlist</h1>
                <div className="flex justify-center py-7">
                    <p className="text-4xl">WishList</p>
                </div>
                <div className="flex justify-end pr-[100px] pb-3 ">
                    <p className="text-base mr-3">Share wishlist with others</p>
                    <div>
                        <Image src={shareIcon} className="w-[19px]" alt="shareicon" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 px-[100px] mt-8 mb-20">
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
                <WishlistCard/>
            </div>


            <Footer />
        </>
    );
};

export default WishlistP;