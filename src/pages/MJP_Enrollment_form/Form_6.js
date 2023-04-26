import React from 'react';
import Link from 'next/link';
import Header4 from '@/Components/Header_Form/Header-4';
import Footer2 from '@/Components/Footer-2/Footer2';
import Socialmedia from "../../Components/Socialmedia/Socialmedia";

const Form_6 = () => {
  return (
    <>
    <Header4 />
      <div className=" flex justify-center my-[127px]">
        <div className="h-[948px] w-[793px] relative registration_form">
          <div className="flex justify-center">
            <p className="text-base text-[#777D85] ">Log in using</p>
          </div>
          <div className='my-[70px]'>
            <Socialmedia />
          </div>
          <div className="flex justify-center">
            <p className="text-base text-[#777D85] ">Log in with</p>
          </div>
          <div className="flex justify-center mt-10">
            <a className=" mr-10 btn_registr_mobile">Mobile</a>
            <a className="rounded btn_registr_email">Email</a>
          </div>
          <div className="mt-12">
            <form className="ml-[150px]">
              <div className="flex flex-col mb-5">
                <label className="text-[#192537] text-base">Full Name</label>
                <input type="text" placeholder="Full Name" className="w-[500px] mt-[10px] border p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-[#192537] text-base">Mobile Number</label>
                <input type="text" placeholder="+91 Mobile Number" className="w-[500px] mt-[10px] border p-2" />
              </div>
            </form>
          </div>

          <div className="w-[150px] mt-5 mx-[150px]">
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
              <p className="text-xs mt-5">Resend OTP</p>
            </div>
          </div>

          <div className="flex justify-start mx-[150px] mt-5">
            <div className="mr-[100px]">
              <input type="radio" className="mr-[11px]" />
              <label className="font-family text-base text-[#192537] ">Enable WhatsApp Communication</label>
            </div>
          </div>

          <div className="flex justify-center mt-[30px]">
            <Link href={"../MyDashboard/MyDashboard"} ><button className="border bg-[#192537] text-white py-2 px-[225px] text-[] text-base">Register</button></Link>
          </div>
          <div className="mx-[150px] mt-5">
            <p className="text-lg text-[#192537]">By registering an account you agree to our <span
              className="text-[#A18A66]">Terms & Conditions.</span></p>
          </div>
          <div className="text-center flex justify-center gap-2 mt-16">
            <p className="text-lg font-semibold"> Already have an account? </p>
            <Link href={"./Form_2"} className="regsiter_btn text-lg font-semibold text-[#A18A66] "> Log In</Link>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Form_6