import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AdditionTable() {
  return (
    <div className="lapl:hidden block addtional-table">
      <h2 className=" mt-10">Additional Information:</h2>
      <div className="product-detail flex flex-col">
        <div className="product-deatil-1 py-3.5 px-2">
          <div className="flex justify-between items-center w-full">
            <p>Product Details:</p>
            <AiOutlinePlus />
          </div>
          <table className="Product-table">
            <tbody>
              <tr>
                <td>Gross Weight (Approx)</td>
                <td>4.5450</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>20.91</td>
              </tr>
              <tr>
                <td>Width</td>
                <td>13.97</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-deatil-1 py-3.5 px-2">
          <div className="flex justify-between items-center w-full">
            <p>Metal Details:</p>
            <AiOutlinePlus />
          </div>
          <table className="Metal-table">
            <thead>
              <tr>
                <th>Metal Type</th>
                <th>Tone </th>
                <th>Purity </th>
                <th>Weight </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gold</td>
                <td>Gold</td>
                <td>18K</td>
                <td>4.476 gm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-deatil-1 py-3.5 px-2">
          <div className=" flex items-center justify-between ">
            <p>Stone Details:</p>
            <AiOutlinePlus />
          </div>
          <div className="flex flex-col gap-3">
            <table className="stone-table">
              <tbody>
                <tr>
                  <td>Stone Type</td>
                  <td>Shape</td>
                  <td>Cut</td>
                  <td>Colour</td>
                  <td>Clarity</td>
                  <td>Carat</td>
                  <td>Pcs.</td>
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <td colSpan={5}>Total Weight</td>
                    <td>0.35 Ct</td>
                </tr>
              </tfoot>
            </table>
            <table className="stone-table">
            <tbody>
                <tr>
                  <td>Stone Type</td>
                  <td>Shape</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>D</td>
                  <td>Pcs.</td>
                </tr>
                <tr>
                  <td>Pearl</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Pearl</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Pearl</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
            <table className="stone-table">
            <tbody>
                <tr>
                  <td>Stone Type</td>
                  <td>Shape</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>D</td>
                  <td>Pcs.</td>
                </tr>
                <tr>
                  <td>Gemstone</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Gemstone</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Gemstone</td>
                  <td>Round</td>
                  <td>Exellent</td>
                  <td>I-J</td>
                  <td>VS-SI</td>
                  <td>0.100 Ct</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="product-deatil-1 py-3.5 px-2">
          <div className="flex justify-between items-center w-full">
            <p>Price Breakup:</p>
            <AiOutlinePlus />
          </div>
          <table className="Price-table">
            <tbody>
              <tr>
                <td>Metal</td>
                <td>₹18,190.05</td>
              </tr>
              <tr>
                <td>Diamond</td>
                <td>₹18,190.05</td>
              </tr>
              <tr>
                <td>Making Charges</td>
                <td>₹18,190.05</td>
              </tr>
              <tr>
                <td>Sub Total</td>
                <td>₹18,190.05</td>
              </tr>
              <tr>
                <td>GST (3%)</td>
                <td>₹18,190.05</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>₹45,522.45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdditionTable;
