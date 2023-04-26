import Image from "next/image";
import back from "../../../public/Images/page-9/Web/back.png";
import exchange from "../../../public/Images/page-9/Web/exchange.png";
import free from "../../../public/Images/page-9/Web/free.png";
import hallmarked from "../../../public/Images/page-9/Web/hallmarked.png";
import warranty from "../../../public/Images/page-9/Web/warranty.png";



function OurPromise() {
    return (
        <div className="Our_promise">
            <h1 className="laps:text-[24px] lapl:text-[36px] laps:py-14 lapl:py-16">Our Promise To You</h1>
            <div className="Promise_cards laps:pb-[55px] lapXL:pb-[106px] laps:mx-[50px] lapXL:mx-[156px] flex justify-between laps:gap:[30px] lapXL:gap-[50px]">

                <div className="text-center w-[200px] h-[150px] promise_card">
                    <div className="free_shipping w-[80px] h-[60px] mx-auto mb-8">
                        <Image src={free} alt="free_shipping"/>
                    </div>
                    <h2 className="laps:text-[14px] lapXL:text-[18px] my-3">Free Shipping</h2>
                    <p className="laps:text-[12px] lapl:text-[16px]">We will get your jewellery delivered free of cost.</p>
                </div>
                <div className="text-center w-[300px] h-[150px] promise_card">
                    <div className="free_shipping w-[80px] h-[60px] mx-auto mb-8">
                        <Image src={hallmarked} alt="hallmarked"/>
                    </div>
                    <h2 className="laps:text-[14px] lapXL:text-[18px] my-3">100% Hallmarked & Certified</h2>
                    <p className="laps:text-[12px] lapl:text-[16px]">JEWELNME jewelery always carries a certificate of authenticity.</p>
                </div>
                <div className="text-center w-[200px] h-[150px] promise_card">
                    <div className="free_shipping w-[80px] h-[60px] mx-auto mb-8">
                        <Image src={back} alt="money_back"/>
                    </div>
                    <h2 className="laps:text-[14px] lapXL:text-[18px] my-3">21 Days Money-Back</h2>
                    <p className="laps:text-[12px] lapl:text-[16px]">Get 100% refund If you don't like your jewellery.</p>
                </div>
                <div className="text-center w-[280px] h-[150px] promise_card">
                    <div className="free_shipping w-[80px] h-[60px] mx-auto mb-8">
                        <Image src={exchange} alt="exchange"/>
                    </div>
                    <h2 className="laps:text-[14px] lapXL:text-[18px] my-3">Lifetime Exchange</h2>
                    <p className="laps:text-[12px] lapl:text-[16px]">Exchange your old designs with new one, whenever you want.</p>
                </div>
                <div className="text-center w-[230px] h-[150px] promise_card">
                    <div className="free_shipping w-[80px] h-[60px] mx-auto mb-8">
                        <Image src={warranty} alt="warranty"/>
                    </div>
                    <h2 className="laps:text-[14px] lapXL:text-[18px] my-3">JEWELNME Warranty</h2>
                    <p className="laps:text-[12px] lapl:text-[16px]">If there is an issue with your jewellery, we'll fix it.</p>
                </div>
            </div>
        </div>
    );
}

export default OurPromise;