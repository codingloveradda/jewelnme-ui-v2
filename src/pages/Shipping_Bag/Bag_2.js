import Footer2 from '@/Components/Footer-2/Footer2';
import Header2 from '@/Components/Header-2/Header2';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import done from "../../../public/Images/Bag/Done.png";

const Bag_2 = () => {
    return (
        <>
            <Header2 />
            <div className='bag-2'>
                <div >
                    <Image src={done} alt='done' className='w-[55px]' />
                </div>
                <h1>Order Confirmed!</h1>
                <p>Thank you for shopping with Jewelnme. Updates of your order will be sent to Email <br /> geos here</p>
                <span>You order should reach by 13 July. Sit tight, your jewel is on its way!</span>
                <div className='delivering '>
                    <span>Delivering To:</span>
                    <h2>John Deo | +91 000 000 0000</h2>
                    <p>#2563, Landmark 0000000, Sector 00, City Name, State Name, Pincode 000000</p>
                </div>
                <div className='flex gap-5'>
                    <Link href={"../Shipping_Bag/Bag_3"} className='bag-2-btn'>
                        <button>View Order Summary</button>
                    </Link>
                    <Link href={"/"} className='bag-2-btn'>
                        <button>Continue Shopping</button>
                    </Link>
                </div>


            </div>
            <Footer2 />
        </>
    );
};

export default Bag_2;