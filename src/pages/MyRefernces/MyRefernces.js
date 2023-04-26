import React from "react";
import Image from "next/image";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import refer from "../../../public/Images/MyRefernces/my-reference.jpg";
import apple from "../../../public/Images/MyRefernces/apple.png";
import facebook from "../../../public/Images/MyRefernces/Facebook.png";
import google from "../../../public/Images/MyRefernces/Google.png";
import instagram from "../../../public/Images/MyRefernces/Instagram.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MyRefernces = () => {
  return (
    <>
      <Header />
      <Nav name="/ My References" />
      <div className="mydashboard">
        <div>
          <MainDashboard />
        </div>
        <div className="details">
          <MainName name="My References" />
          <div className="Refer-img">
            <div
              className="title"
              style={{
                backgroundImage: `url(${refer.src})`,
                height: "624px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p>Refer A Friend</p>
            </div>
            <div className="refer-btm">
              <p>
                If you enjoy shopping with us SHARE THE LOVE and receive a token
                of our appreciation!
              </p>
              <div className="input-btn">
                <input
                  type="type"
                  placeholder="XUVWG6"
                  className="placeholder:text-[#192537]"
                />
                <a href="">Copy</a>
              </div>
              <span>or</span>
              <div className="social-icon">
                <Image src={apple} alt="apple-icon" />
                <Image src={facebook} alt="facebook-icon" />
                <Image src={google} alt="google-icon"/>
                <Image src={instagram} alt="instagram-icon"/>
                <Image src={apple} alt="apple-icon" />
                <Image src={facebook} alt="facebook-icon" />
                <Image src={google} alt="google-icon"/>
                <Image src={instagram} alt="instagram-icon"/>
              </div>
            </div>
          </div>
          <div className="customer-table">
            <h2>Customer Refered by You </h2>
            <table>
              <thead>
                <tr>
                  <th className="py-[16px] px-[82px]">Sr. No</th>
                  <th className="py-[16px] px-[79px]">Date</th>
                  <th className="py-[16px] px-[160px]">Name</th>
                  <th className="py-[16px] px-[162px]">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-[30px]">00</td>
                  <td className="py-[30px]">dd-mmm-yyyy</td>
                  <td className="py-[30px]">John Deo</td>
                  <td className="py-[30px]">Location Goes Here</td>
                </tr>
                <tr>
                  <td className="py-[30px]">00</td>
                  <td className="py-[30px]">dd-mmm-yyyy</td>
                  <td className="py-[30px]">John Deo</td>
                  <td className="py-[30px]">Location Goes Here</td>
                </tr>
                <tr>
                  <td className="py-[30px]">00</td>
                  <td className="py-[30px]">dd-mmm-yyyy</td>
                  <td className="py-[30px]">John Deo</td>
                  <td className="py-[30px]">Location Goes Here</td>
                </tr>
                <tr>
                  <td className="py-[30px]">00</td>
                  <td className="py-[30px]">dd-mmm-yyyy</td>
                  <td className="py-[30px]">John Deo</td>
                  <td className="py-[30px]">Location Goes Here</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyRefernces;
