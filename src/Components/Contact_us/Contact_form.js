import React from "react";

const Contact_form = () => {
  return (
    <div className="contact_form grid grid-cols-2 px-[150px] py-[100px] gap-[150px]">
      <div>
        <h1>Get in touch</h1>
        <div className="mt-8">
          <form>
            <div className="py-4">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-1  p-3"
              />
            </div>
            <div className="py-4">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="mt-1 p-3"
              />
            </div>
            <div className="py-4">
              <label>Email ID</label>
              <input type="text" placeholder="Email ID" className="mt-1 p-3" />
            </div>
            <div className="py-4">
              <label>Message</label>
              <input type="text" placeholder="Subject" className="mt-1 p-3" />
              <textarea
                rows="3"
                className="p-3"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="px-[50px] py-2.5 mt-8">Send Message</button>
          </form>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-[80px] pb-[100px]">
        <h1>Contact us</h1>
        <div className="w-[282px]  ">
          <h3>Address</h3>
          <p>
            705-A, Bestech Business Towers Sector 66, Mohali, punjab - 160066
            India
          </p>
        </div>
        <h3>Email</h3>
        <p>care@jeweln.me</p>
        <h3>Whatsapp</h3>
        <p>+91 788 882 6136</p>
        <h3>Call</h3>
        <p>+91 172 4089888</p>
        <p className="italic mt-4">Monday- Friday: 9:30 AM to 6:30 PM (IST)</p>
        <p className="italic">
          Saturday: 9:30 AM to 4:30 PM (IST) except 3rd Saturady
        </p>

        <div className="mt-8 text-3xl">
          <i className=" mr-5 text-[#192537] fa-brands fa-facebook-f"></i>
          <i className="mr-5 fa-brands fa-instagram"></i>
          <i className="mr-5 fa-brands fa-pinterest"></i>
          <i className="mr-5 fa-brands fa-youtube"></i>
          <i className="mr-5 fa-brands fa-twitter"></i>
          <i className="mr-5 fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact_form;
