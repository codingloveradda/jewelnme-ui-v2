import Link from 'next/link';
import Image from 'next/image';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MJP_Steps from '@/Components/MJP/MJP_Steps';
import Calculator from '@/Components/MJP/Calculator';
import FAQ from '@/Components/MJP/FAQ';
import OurPromise from '@/Components/OurPromise/OurPromise';
import Jewel_plan from '@/Components/MJP/Jewel_plan';
import MJP_BannerIMG from "../../public/Images/MJP_Plan/MJP_ Banner.png";

const MJP_Plan = () => {
  return (
    <div>
      <Header />
      <div className='relative'>
        <Image src={MJP_BannerIMG} alt='mjp_banner' />
        <div className="absolute MJP_banner mbs:top-[25%] mbl:top-[30%] lapm:top-[35%] text-white left-[36%] text-center">
          <h1 className="italic tabs:mb-2 laps:mb-7 mbs:text-[12px] mbl:text-[14x] tabl:text-[24px] lapm:text-[36px]">Nothing can stand between true love</h1>
          <p className="tabs:mb-2 laps:mb-7 mbs:text-[8px] mbl:text-[10x] tabl:text-[14px]">Crystalize your love with MJP</p>
          <Link href={"./MJP_Enrollment_form/Form_1"} className="MJP_LINK mbs:py-1 mbl:py-2 mbs:px-[30px] tabl:py-3 tabl:px-[40px] text-white mbs:text-[8px] mbl:text-[10px] tabl:text-[14px]">Start Now <span
            className="ml-[10px]"><i className="fa-solid fa-arrow-right-long"></i></span></Link>
        </div>
      </div>
      <div className='text-center font-light text-lg py-16 mbs:mx-5 tabs:mx-[50px] lapm:mx-[200px] mbs:px-0 tabs:px-4 laps:px-16 lapXL:px-44'>
        <p>
          Acknowledging the true spirit of making fine jewelry accessible to everyone, Jewelnme launched My Jewel Plan
          (MJP), an economical and seamless method to ensure its customers own every single jewel from their Wishlist.
        </p>
        <p className='pt-5'> My Jewel Plan (MJP) is a monthly installment plan, where the customers pay a minimum monthly amount of
          ₹ 3000 or any other amount in multiples of ₹ 1000 for 11 months. And JEWELNME contributes the instalment
          amount for the 12th month. Through this plan, customers can buy their favourite gold and diamond jewellery.
        </p>
      </div>

      <MJP_Steps />
      <Calculator />
      <Jewel_plan />
      <OurPromise />
      <FAQ />
      <Footer />
    </div>
  )
}

export default MJP_Plan