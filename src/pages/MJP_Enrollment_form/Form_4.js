import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import done from "../../../public/Images/Bag/Done.png";
import Header2 from '../../Components/Header-2/Header2';
import Footer2 from '../../Components/Footer-2/Footer2';


const Form_4 = () => {
    return (
        <div>
            <Header2 />
            <div className='payment_content flex flex-col items-center mt-[150px] mb-[230px]'>
                <div >
                    <Image src={done} className='w-[55px]' />
                </div>
                <div className='my-8'>
                    <h1>Payment Successful!</h1>
                </div>
                <div className='text-center'>
                    <p >Payment ID: pay_JnafknjwafjlkgllT </p>
                    <p> Jewelnme is very happy to have you as a customer.</p>
            
                </div>
                <div className='action_btn flex items-center gap-10 mt-16'>
                    <a className='px-[50px] py-2.5'>Download Receipt</a>
                    <Link href={"/"} className='px-[99px] py-2.5'>Home</Link>
                </div>
            </div>
        <Footer2 />
        </div>
    )
}

export default Form_4