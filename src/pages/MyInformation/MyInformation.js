import Image from "next/image"

import add from "../../../public/Images/Dashboard/add.png";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MyInformation = () => {
  const [showOccasion, setShowOcaasion] = useState(false);
  return (
    <>
      <Header />
      <Nav name="/ My Information" />
      <div className="mydashboard">
        
          <MainDashboard />
   
        <div className="details">
          <MainName name="My Information" />

          {/* Basic */}
          <div className="basic-info">
            <p>Basic Information</p>
            <form>
              <div className="form-basic">
                <div className="lable-input">
                  <label>First Name</label>
                  <input type="text" placeholder="Rachel" />
                </div>
                <div className="lable-input">
                  <label>Last Name</label>
                  <input type="text" placeholder="Green" />
                </div>
              </div>
              <div className="form-basic">
                <div className="lable-input">
                  <label>Mobile Number</label>
                  <input type="text" placeholder="+91 000 000 0000" />
                </div>
                <div className="lable-input">
                  <label>Alt. Mobile Number</label>
                  <input type="text" placeholder="+91 000 000 0000" />
                </div>
              </div>
              <div className="form-basic">
                <div className="lable-input">
                  <label>Email ID</label>
                  <input type="text" placeholder="username@gmail.com" />
                </div>
                <div className="lable-input">
                  <label>Gender</label>

                  <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>I Prefer Not To Say</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          {/* Occasion  */}
          <div className="basic-info">
            <p>Occasion</p>
            <form>
              <div className="form-basic">
                <div className="lable-input">
                  <label>Date of birth</label>
                  <input type="text" placeholder="DD-MMM-YYYY" />
                </div>
                <div className="occasion-btn" onClick={() => setShowOcaasion(true)} >
                  <Image src={add} alt="add" className="w-[14px] h-[15px]" />
                  <button>Add Occasion</button>
                </div>
                {showOccasion && <Add_Occation closeModal={() => setShowOcaasion(false)} />}
              </div>
            </form>
          </div>

          {/* Nominee */}
          <div className="basic-info">
            <p>Nominee Details</p>
            <form>
              <div className="form-basic">
                <div className="lable-input">
                  <label>First Name</label>
                  <input type="text" placeholder="Rachel" />
                </div>
                <div className="lable-input">
                  <label>Last Name</label>
                  <input type="text" placeholder="Green" />
                </div>
              </div>
              <div className="form-basic">
                <div className="lable-input">
                  <label>Relation</label>
                  <input type="text" placeholder="0000000000000000" />
                </div>
                <div className="lable-input">
                  <label>Contact Number</label>
                  <input type="text" placeholder="0000000000000000" />
                </div>
              </div>
            </form>
          </div>

          {/* Other Info */}
          <div className="basic-info">
            <p>Other Information</p>
            <form>
              <div className="form-basic">
                <div className="lable-input">
                  <label>PAN</label>
                  <input type="text" placeholder="ABCDE1234A" />
                </div>
                <div className="lable-input">
                  <label>Occupation</label>

                  <select>
                    <option>Designer</option>
                    <option>HR</option>
                    <option>Advocate</option>
                    <option>Civil Engineer</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          {/* Bank */}
          <div className="bank">
            <p>Bank Deatils</p>
            <form>
            <div className="form-basic">
              <div className="lable-input">
                <label>Account Number:</label>
                <input type="text" placeholder="0000000000000000" />
              </div>
              <div className="lable-input">
                <label>IFSC:</label>
                <input type="text" placeholder="0000000000000000" />
              </div>
            </div>
            <div className="form-btn">
              <button className="save">Save Changes</button>
              <button className="cancel">Cancel</button>
            </div>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyInformation;
