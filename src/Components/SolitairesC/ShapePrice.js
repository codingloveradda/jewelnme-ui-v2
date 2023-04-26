import React  from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import round from "../../../public/Images/Header/Solitaires/group/2x/round2.png";
import oval from "../../../public/Images/Header/Solitaires/group/2x/oval2.png";
import cushion from "../../../public/Images/Header/Solitaires/group/2x/cushion2.png";
import pear from "../../../public/Images/Header/Solitaires/group/2x/pear2.png";
import princes from "../../../public/Images/Header/Solitaires/group/2x/princes2.png";
import emerald from "../../../public/Images/Header/Solitaires/group/2x/emerald2.png";
import marquise from "../../../public/Images/Header/Solitaires/group/2x/marquise2.png";
import asscher from "../../../public/Images/Header/Solitaires/group/2x/asscher2.png";
import radiant from "../../../public/Images/Header/Solitaires/group/2x/radiant2.png";
import heartS from "../../../public/Images/Header/Solitaires/group/2x/heart2.png";
import drop from "../../../public/Images/Dashboard/Drop.png";



function ShapePrice(props) {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      {/* solitair shape and diamond price */}
      <div className="shape-price">
        <div className="shape">
          <h2>Solitair Shape</h2>
          <div className="shape-img">
            <div className="img-name">
              <Image src={round} />
              <p>Round</p>
            </div>
            <div className="img-name">
              <Image src={oval} />
              <p>Oval</p>
            </div>
            <div className="img-name">
              <Image src={cushion} />
              <p>Cushion</p>
            </div>
            <div className="img-name">
              <Image src={pear} />
              <p>Pear</p>
            </div>
            <div className="img-name">
              <Image src={princes} />
              <p>Princess</p>
            </div>
          </div>
          <div className="shape-img">
            <div className="img-name">
              <Image src={emerald} />
              <p>Emerald</p>
            </div>
            <div className="img-name">
              <Image src={marquise} />
              <p>Marquise</p>
            </div>
            <div className="img-name">
              <Image src={asscher} />
              <p>Asscher</p>
            </div>
            <div className="img-name">
              <Image src={radiant} />
              <p>Radiant</p>
            </div>
            <div className="img-name">
              <Image src={heartS} />
              <p>Heart</p>
            </div>
          </div>
        </div>
        <div className="drop-icon">
            <Image src={drop} className="rotate-180" />
        </div>
        <div className="diamond-price">
          <h2>Diamond Price</h2>
          <div className="range-price">
            <div className="range">
              <Box>
                <Slider 
                  getAriaLabel={() => ""}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className="min-max-price">
              <div className="flex gap-4 items-center">
                <p>Min: </p>
                <input type="text" value={value}/>
              </div>
              <div className="flex gap-4 items-center">
                <input type="text" value={ value}/>
                <p>Max: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShapePrice;
