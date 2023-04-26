import React from "react";

const SaveAdress = ({name}) => {
  return (
 
      <div className="Addrss">
        <div className="name-icon">
          <div className="name">
            <p>John Deo</p>
            <span>Home</span>
          </div>
          <div className="edit-icons">
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>
        <div className="addres-city">
          <span>Adress</span>
          <p>
            #2563, Landmark 000000, Sector 00, City Name, State Name, Pincode
            0000000
          </p>
        </div>
        <div className="mobile">
        <span>Mobile No.: +91 000 000 0000</span>
        <p>{name}</p>
        </div>
      </div>
   
  );
};

export default SaveAdress;
