import React from "react";
import Image from "next/image";
import lineL from "../../../public/Images/Dashboard/lineL.png";
import lineR from "../../../public/Images/Dashboard/lineR.png";
// import drop from '../../../public/Images/Dashboard/Drop.png';
import { BsChevronDown} from "react-icons/bs";


function CommonPlan() {
  return (
    <div className="common">
      <div className="common-details">
        <div className="common-content">
          <div className="MJP">
            <div className="right">
              <h2>MJP</h2>
              <p>Common Plan (JW/1021/1)</p>
            </div>
            <div className="left">
              <p>Status: </p>
              <p>Active</p>
            </div>
          </div>
          <div className="bottom">
            <div className="right">
              <div className="right-c">
                <p>Plan Holder</p>
                <span>:</span>
                <p>Dorothy Dean</p>
              </div>
              <div className="right-c">
                <p>Nominee</p>
                <span>:</span>
                <p>Kevin Gomez</p>
              </div>
              <div className="right-c">
                <p>Start Date</p>
                <span>:</span>
                <p>DD-MMM-YYYY</p>
              </div>
              <div className="right-c">
                <p>End Date</p>
                <span>:</span>
                <p>DD-MMM-YYYY</p>
              </div>
            </div>
            <div className="left">
              <div className="left-c">
                <p>Plan Holder</p>
                <span>:</span>
                <p>₹ 10,000 x 11</p>
              </div>
              <div className="left-c">
                <p>Payment Cycle</p>
                <span>:</span>
                <p>11th-20th</p>
              </div>
              <div className="left-c">
                <p>Paid Amount</p>
                <span>:</span>
                <p>₹ 30,000</p>
              </div>
              <div className="left-c">
                <p>Unpaid Amount</p>
                <span>:</span>
                <p>₹ 80,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="common-content-right">
          <div className="top-btn">
            <p>Next Payment Date: DD-MMM-YYYY</p>
            <a href="#">Pay Now</a>
          </div>
          <div className="bottom-img">
            <div className="line-img">
              <Image src={lineL} alt="line" className="h-[6px]" />
              <span>₹ 10,000</span>
              <Image src={lineR} alt="line" className="h-[6px]" />
            </div>
            <p>My benefits upon successful completion of MJP</p>
          </div>
        </div>
      </div>

      <div className="payment-history">
          <p className="">Payment History 
           {/* <Image src={drop} alt="drop" className="drop w-[16px] h-[10px]"/> */}
           <BsChevronDown />
           </p>


        <div className="payment-table">
          <table>
            <thead>
              <tr>
                <th className="py-[17px] px-[35px]">Sr. No</th>
                <th className="py-[17px] px-[100px]">Due Dates</th>
                <th className="py-[17px] px-[50px]">Recieved Date</th>
                <th className="py-[17px] px-[47px]">Receipt No.</th>
                <th className="py-[17px] px-[37px]">MOP</th>
                <th className="py-[17px] px-[50px]">Approved By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-[22px]">1</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">2</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">-</td>
              </tr>
              <tr>
                <td className="py-[22px]">3</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">4</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">-</td>
              </tr>
              <tr>
                <td className="py-[22px]">5</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">6</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">7</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">8</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
              <tr>
                <td className="py-[22px]">9</td>
                <td className="py-[22px]">20-Dec-22 to 20-Dec-22</td>
                <td className="py-[22px]"> 20-Dec-22</td>
                <td className="py-[22px]">Jr/0222/20</td>
                <td className="py-[22px]">Cash</td>
                <td className="py-[22px]">Auto</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default CommonPlan;
