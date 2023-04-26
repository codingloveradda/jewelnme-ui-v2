import Image from "next/image";
import dRing from "../../../public/Images/Header/MY_JEWEL_PLAN/D.png";
import option from "../../../public/Images/page-9/Index/Option.svg";


const WishlistCard = () => {
    return (
            <div className="rounded h-[609px] w-[400px] relative WishlistCard">
                <div className="absolute top-5 right-5">
                    <i className="fa-solid fa-x"></i>
                </div>
                <div className="">
                    <Image src={dRing} alt="dring"/>
                </div>
                <div className="flex justify-center mb-3">
                    <Image src={option} alt="option"/>
                </div>
                <div className="text-center">
                    <h1 >Arcana Fresh Diamond Studs</h1>
                    <p className="">₹ 25,000 - ₹ 50,000</p>
                </div>
                <div className="action_btn flex justify-center items-center ">
                    <a className="px-36 py-2.5">Add to Bag</a>
                </div>
            </div>
    );
};

export default WishlistCard;