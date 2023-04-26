import React from "react";
import Image from "next/image";
import D from "../../../public/Images/Buy_With_MJP/D.png";
import MJP_Banner from "../../../public/Images/Buy_With_MJP/MJP_Banner.jpg";
import Go from "../../../public/Images/Profile_Services/Go.png";
import { RxCross2 } from "react-icons/rx";


const Buy_MJP = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="model flex justify-center items-center py-[119px] ">
        <div className="box w-[1136px] h-[749px]">
          <div
            className="mjp_img h-[250px] w-[1136px] relative "
            style={{
              backgroundImage: `url(${MJP_Banner.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-between w-[1136px]">
              <div>
                <Image src={D} className="absolute w-[370px] top-4 -left-20" />
                <p className="absolute left-[54px] top-[178px]">BUY WITH MJP</p>
              </div>
              <div className="mr-14 mt-10">
                {/* <Image alt="cancle" src={Cancle} className="absolute w-4 h-4" /> */}
                <RxCross2  onClick={closeModal} />
              </div>
            </div>
          </div>
          <div className="mjp_content flex mt-[55px] pl-[50px] pr-[64px] gap-[50px]">
            <div className="mjp_details w-3/5 pr-[50px]">
              <div className="flex flex-col gap-6">
                <p>
                  My Jewel Plan (MJP) is an economical and seamless method to
                  ensure its customers own every single jewel from their
                  Wishlist.
                </p>
                <p>
                  My Jewel Plan (MJP) is a monthly installment plan, where the
                  customers pay a minimum monthly amount of ₹ 3000 or any other
                  amount in multiples of ₹ 1000 for 11 months. And JEWELNME
                  contributes the instalment amount for the 12th month
                </p>
              </div>
              <div className="mt-8">
                <a className="flex items-center gap-3">
                  Know more
                  <Image src={Go} className="w-4" />
                </a>
              </div>
              <div className="action_btn flex justify-center mt-[50px]">
                <a href="" className="px-[50px] py-2.5">
                  Start Now
                </a>
              </div>
            </div>
            <div className="mjp_table w-2/5">
              <p className="text-base font-light">
                *Note: The 10% price can vary depending on the product's weight
                or diamond 4C's
              </p>
              <div className="mt-4">
                <table>
                  <thead>
                    <tr>
                      <th>
                        Pay 3,626.87 x 11 <span>(A)</span>
                      </th>
                      <th>₹ 39,895.58</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        We Pay <span>(B1)</span>{" "}
                      </td>
                      <td>₹ 3,626.87</td>
                    </tr>
                    <tr>
                      <td>
                        Sign-up Bonus <span>(B2)</span>{" "}
                      </td>
                      <td>₹ 1,000.00</td>
                    </tr>
                    <tr>
                      <td>
                        Diamond Bonus <span>(B3)</span>{" "}
                      </td>
                      <td>₹ 1,000.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr id="total">
                      <td>
                        Total Benefit <span>(B)</span>{" "}
                      </td>
                      <td>₹ 5,626.87</td>
                    </tr>
                    <tr>
                      <td>
                        Buying Capacity <span>(A+B)</span>{" "}
                      </td>
                      <td>₹ 45,522.45</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="watermark mt-[35px]">
                <p className="text-4xl text-center  font-bold">
                  Total Benefit ₹ 5,626.87
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy_MJP;
