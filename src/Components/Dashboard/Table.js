import React from 'react';

const Table = () => {
    return (
      <div className="transaction-table">
        <table>
          <thead>
            <tr>
              <th className="py-[16px] px-[20px]">Sr. No</th>
              <th className="py-[16px] px-[40px]">Date</th>
              <th className="py-[16px] px-[106px]">Description</th>
              <th className="py-[16px] px-[60px]">Credit</th>
              <th className="py-[16px] px-[40px]">Debit</th>
              <th className="py-[16px] px-[60px]">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
            <tr>
              <td className="py-[22px]">00</td>
              <td className="py-[22px]">dd-mmm-yyyy</td>
              <td className="py-[22px]">Description</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
              <td className="py-[22px]">00000</td>
            </tr>
          
          </tbody>
          <tfoot>
          <tr>
              <td colSpan={3} className="py-[22px]">Total</td>
              <td className="py-[22px] ">00000</td>
              <td className="py-[22px] ">00000</td>
              <td className="py-[22px] ">00000</td>
            </tr>
          </tfoot>
          
        </table>
      </div>
    );
};

export default Table;