import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Add_Address from "@/pages/New_Address/Add_Address";

function Address6Component({ name, input, inputpara }) {
  const [addAddress, setAddAddress] = useState(false);
  return (
    <div className="address-component">
      <h1>{name}</h1>
      <div className="default-addres flex justify-between">
        <span>Default Address</span>
        <div className="flex items-center gap-3">
          <input type={input} />
          <p>{inputpara}</p>
        </div>
      </div>

      <div className="Addrss6">
        <div className="name-icon">
          <div className="name">
            <input type="radio" />
            <p>John Deo</p>
            <span>Home</span>
          </div>
          <div className="edit-icons">
            <FiEdit />
          </div>
        </div>
        <div className="addres6-city">
          <span>Adress</span>
          <div>
            <p>#2563, Landmark 000000, Sector 00</p>
            <p> City Name, State Name, Pincode 0000000</p>
          </div>
        </div>
        <div className="mobile">
          <p>
            <span> Mobile No.: </span>
            +91 000 000 0000
          </p>
        </div>
      </div>
      <div className="address6-btn">
        <AiOutlinePlus />
        <button onClick={() => setAddAddress(true)}>Add a New Address</button>
        {addAddress && <Add_Address closeModel={() => setAddAddress(false)} />}
      </div>
    </div>
  );
}

export default Address6Component;
