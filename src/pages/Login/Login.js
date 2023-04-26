import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/Images/Logo.svg";
import bg from '../../../public/Images/LoginSignup/login_back.jpg';
import bg2 from '../../../public/Images/LoginSignup/a.svg';
import Socialmedia from "../../Components/Socialmedia/Socialmedia";



function Login() {

    return (

        <div className=" flex justify-between login" style={{ backgroundImage: `url(${bg.src})`, width: '100%', height: '100%',}} >
            <div className="border h-[948px] w-[793px] Login-form" style={{ backgroundImage: `url(${bg2.src})`,}} >
                <div className="my-[80px] flex justify-center">
                    <Image src={logo} alt="login_logo" />
                </div>
                <div className="mb-[40px] flex justify-center logIn-before">
                    <p className="text-base text-[#777D85] ">Log in using</p>
                </div>
                <Socialmedia/>

                <div className="mb-[80px] flex justify-center AFTR">
                    <p className="text-base text-[#777D85]"> Log in with</p>
                </div>

                <div className="mobile_email">
                    <a className="text-base mr-50 mobile_btn">Mobile</a>
                    <a className=" text-base  email_btn">Email</a>
                </div>

                <div className=" mt-8 ml-[150px]">
                    <form className="flex justify-center flex-col">
                        <label className="text-[#192537] text-base">Mobile Number</label>
                        <input type="text" placeholder="+91 Enter Mobile" className="w-[500px] mt-[10px]  p-2 mobile_number" />
                    </form>
                </div>
                <div className='hoverable'> 
                    <div className="flex justify-start mx-[150px] mb-[30px] mt-8">
                        <div className="mr-[100px]">
                            <input type="radio" className="mr-[11px]" />
                            <label className="font-family text-base text-[#192537] ">Using OTP</label>
                        </div>
                        <div>
                            <input type="radio" className="mr-[11px]" />
                            <label className="font-family text-base text-[#192537] ">Using Password</label>
                        </div>
                    </div>

                    <div className="my-8 ml-[150px] input_hover">
                        <input type="password" placeholder="Enter Password" className="w-[500px] input_pass p-2" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <a className="btn_login_main">Log In</a>
                </div>
                <div className="mx-[150px] mt-[28px]">
                    <p className="text-base text-[#192537]">Forgot password?</p>
                </div>
            </div>

            <div className="h-[948px] w-[433px] relative flex justify-center items-center  Registration_bar" style={{ backgroundImage: `url(${bg2.src})`, }}>

                <div className="absolute top-5 right-8">
                    <span><i className="fa-solid fa-xmark"></i></span>
                </div>
                <div className="text-center flex flex-col gap-5 ">
                    <p className="text-lg font-semibold"> Don't have an account?</p>
                    <Link href={"../SignUp/SignUp"} className="regsiter_btn  rounded py-[8px] px-[30px] text-base "> Register</Link>
                </div>

            </div>
        </div>
    );
}

export default Login;