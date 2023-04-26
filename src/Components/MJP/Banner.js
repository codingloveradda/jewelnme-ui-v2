import React from 'react'
import Image from 'next/image'
// import MJP_Banner from "../../../public/Images/MJP_Plan/MJP Banner.png"

const Banner = () => {
    return (
        <div>
            <div className="bg-img_golden relative h-[550px]" style={{backgroundImage: 'url("../../../public/Images/MJP_Plan/MJP Banner.png")' , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundPosition:"center center"}}>
                <h1>ghjscb</h1>
                
            </div>
            
            {/* <div className="MJP_Acknowledging">
                <p className="my-8 text-base font-light w-[1089px] mx-[415px] text-center">Acknowledging the true spirit of
                    making fine jewelry accessible to everyone,
                    Jewelnme launched <span className="text-lg">My Jewel Plan (MJP)</span>,
                    an economical and seamless method to ensure its customers own every single jewel from their
                    Wishlist.
                </p>
                <p className="my-8 text-base font-light w-[1089px] mx-[415px] text-center">
                    <span className="text-lg">My Jewel Plan (MJP)</span> is a monthly installment plan, where the customers
                    pay a minimum monthly amount of <span className="text-lg"> ₹ 3000</span>
                    or any other amount in multiples of ₹ 1000 for 11 months. And JEWELNME contributes the instalment
                    amount for
                    the 12th month. Through this plan, customers can buy their favourite gold and diamond jewellery.
                </p>
            </div> */}
        </div>
    )
}

export default Banner