import Image from "next/image";
import google from "../../../public/Images/LoginSignup/Social Media/Google.png";
import fb from "../../../public/Images/LoginSignup/Social Media/FB.png";
import apple from "../../../public/Images/LoginSignup/Social Media/apple.png";
import insta from "../../../public/Images/LoginSignup/Social Media/Instagram.png";


const Socialmedia=()=> {
    return (
            <div className="socialmedia flex justify-center mb-[70px]">
                <div className="social_icon w-[60px] h-[60px] mr-6">
                    <Image src={google} alt="google" />
                </div>
                <div className="social_icon w-[60px] h-[60px] mr-6">
                    <Image src={apple} alt="apple" />
                </div>
                <div className="social_icon w-[60px] h-[60px] mr-6">
                    <Image src={insta} alt="instagram" />
                </div>
                <div className="social_icon w-[60px] h-[60px]">
                    <Image src={fb} alt="facebook" />
                </div>
            </div>
    )
}
export default Socialmedia;