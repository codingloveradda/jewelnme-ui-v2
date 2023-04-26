import Image from "next/image";
import Link from "next/link";
import Dring from "../../../public/Images/Buy_With_MJP/D.png";
function Product_Image() {
  return (
    <div className="product_image">
      <div className="flex flex-col items-center gap-[30px] mbs:hidden tabl:block">
        <div className="repalce product-img-right w-[88px] flex flex-col gap-[18px]">
          <Image src={Dring} />
          <Image src={Dring} />
          <Image src={Dring} />
          <Image src={Dring} />
        </div>
        <div className="product-img-degree">
           <p>360</p>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="replace">
          <Image src={Dring} />
        </div>
        <div className="product-img-btn flex gap-[20px]">
          <button className="addtobag">Add to Bag</button>
         <Link href={"/Shipping_Bag/Bag16"}>
          <button className="buynow">Buy Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Product_Image;
