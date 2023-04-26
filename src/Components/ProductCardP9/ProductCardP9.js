import Image from "next/image";
import cardring from "../../../public/Images/page-9/card_ring.png";
import heart from "../../../public/Images/Header/Navbar-Icons/Heart.svg";
import golden from "../../../public/Images/page-9/Index/golden.svg";
import silver from "../../../public/Images/page-9/Index/silver.svg";
import pink from "../../../public/Images/page-9/Index/pink.svg";
import Link from "next/link";



const ProductCardP9 = () => {
    return (

        <div className="Product_card_wrapper">
            <Link href="/Product_Page" className="Product_card">
                <div className="Product_heart">
                    <Image src={heart} alt="" />
                </div>
                <div className="Product_color">
                    <div className="Product_color_img">
                        <Image src={golden} alt="golden" />
                        <Image src={silver} alt="silver" />
                        <Image src={pink} alt="pink" />
                    </div>
                </div>
                <div className="Card_img">
                    <Image src={cardring} alt="" />
                </div>
            </Link>

            <div className="product_details">
                <p className="text-base mb-4">Arcana Fresh Diamond Studs</p>
                <p className="text-base ">₹ 25,000 - ₹ 50,000</p>
            </div>

        </div>
    );
};

export default ProductCardP9;