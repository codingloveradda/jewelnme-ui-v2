import Image from "next/image";
import Link from "next/link";
import bg from '../../../public/Images/LoginSignup/login_back.jpg';
import bg2 from '../../../public/Images/LoginSignup/a.svg';
import logo from "../../../public/Images/Logo.svg";
import Socialmedia from "../../Components/Socialmedia/Socialmedia";

const SignUp = () => {
    return (
            <div className="max-w-[1920px] flex justify-between" style={{ backgroundImage: `url(${bg.src})`, width: '100%', height: '100%', }}>

                <div className="-h-[978px] w-[433px] flex justify-center items-center login_section" style={{ backgroundImage: `url(${bg2.src})`, }}>
                    <div className="text-center flex flex-col gap-5 ">
                        <p className="text-lg font-semibold "> Already have an account?</p>
                        <Link href={"../Login/Login"} className=" regsi_login">Log In</Link>
                    </div>
                </div>

                <div className="h-[978px] w-[793px] relative registration_form" style={{ backgroundImage: `url(${bg2.src})`, }}>
                    <div className="mt-[60px] mb-[30px] flex justify-center">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="mb-[30px] flex justify-center">
                        <p className="text-base text-[#777D85] ">Register using</p>
                    </div>
                    <Socialmedia/>
                    <div className="mb-[30px] flex justify-center">
                        <p className="text-base text-[#777D85] ">Register with</p>
                    </div>
                    <div className="flex justify-center">
                        <a className=" mr-10 btn_registr_mobile">Mobile</a>
                        <a className="rounded btn_registr_email">Email</a> 
                    </div>
                    <div className="mt-4">
                        <form className="ml-[150px]">
                            <div className="flex flex-col mb-5">
                                <label className="text-[#192537] text-base">Full Name</label>
                                <input type="text" placeholder="Full Name" className="w-[500px] mt-[10px] border p-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#192537] text-base">Mobile Number</label>
                                <input type="text" placeholder="Enter Mobile" className="w-[500px] mt-[10px] border p-2" />
                            </div>
                        </form>
                    </div>

                    <div className="w-[150px] mt-[20px] mx-[150px]">
                        <div className="flex justify-between">
                            <p>OTP</p>
                            <p>00:00</p>
                        </div>
                        <div className="px-[0px] flex justify-between">
                            <input type="text" className="border w-[30px] h-[35px] pb-[2px]" />
                            <input type="text" className="border w-[30px] h-[35px] pb-[2px]" />
                            <input type="text" className="border w-[30px] h-[35px] pb-[2px]" />
                            <input type="text" className="border w-[30px] h-[35px] pb-[2px]" />
                        </div>
                        <div>
                            <p className="text-xs mt-[10px]">Resend OTP</p>
                        </div>
                    </div>

                    <div className="flex justify-start mx-[150px] mb-[20px] mt-8">
                        <div className="mr-[100px]">
                            <input type="radio" className="mr-[11px]" />
                            <label className="font-family text-base text-[#192537] ">Enable WhatsApp Communication</label>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link href={"../MyDashboard/MyDashboard"} ><button className="border bg-[#192537] text-white py-2 px-[225px] text-[] text-base">Register</button></Link>
                    </div>
                    <div className="mx-[150px] mt-[28px]">
                        <p className="text-base text-[#192537]">By registering an account you agree to our <span
                            className="text-[#A18A66]">Terms & Conditions.</span></p>
                    </div>
                    <div className="absolute top-5 right-8">
                       <i className="fa-solid fa-x"></i>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;