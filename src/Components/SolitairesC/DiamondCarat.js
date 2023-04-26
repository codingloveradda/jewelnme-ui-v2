import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import drop from "../../../public/Images/Dashboard/Drop.png";
import information from "../../../public/Images/Dashboard/information.png";

function DiamondCarat() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [showComponent, setShowComponent] = useState(false);


  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <>
      {/* solitair shape and diamond price */}
      <div className="shape-price">
        <div className="dimondcarat flex flex-col">
          <div className="dimondcarat-range">
            <div className="title-icon">
              <h1>Carat</h1>
              <Image src={information} className="w-[17px]" />
            </div>
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
                  <button>-</button>
                  <input type="text" value={value} />
                </div>
                <div className="flex gap-4 items-center">
                  <input type="text" value={value} />
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dimondcarat-range">
            <div className="title-icon">
              <h1>Colour</h1>
              <Image src={information} className="w-[17px]" />
            </div>
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
              <div className="px-[15px]  flex justify-between">
              <p>D</p>
              <p>E</p>
              <p>F</p>
              <p>G</p>
              <p>H</p>
              <p>I</p>
              <p>J</p>
              <p>K</p>
              <p>L</p>
              <p>M</p>
              <p>N-O</p>
              <p>P-R</p>
              <p>S-Z</p>
              </div>
            </div>
          </div>
          <div className="dimondcarat-range">
            <div className="title-icon">
              <h1>Report</h1>
              <Image src={information} className="w-[17px]" />
            </div>
            <div className="report-input flex  gap-[75px]">
              <div className="flex gap-[17px]">
                <input type="radio" />
                <label>GIA</label>
              </div>

              <div className="flex gap-[17px]">
                <input type="radio" />
                <label>IGI</label>
              </div>
              <div className="flex gap-[17px]">
                <input type="radio" />
                <label>HRD</label>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-icon">
          <Image src={drop} className="rotate-180" />
        </div>
        <div className="dimondcarat flex flex-col">
          <div className="dimondcarat-range">
            <div className="title-icon">
              <h1>Clarity</h1>
              <Image src={information} className="w-[17px]" />
            </div>
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
              <div className="px-[15px]  flex justify-between">
              <p>FL</p>
              <p>VVS1</p>
              <p>VVS2</p>
              <p>VS1</p>
              <p>VS2</p>
              <p>S11</p>
              <p>S12</p>
              <p>P1</p>
              <p>P2</p>
              <p>P3</p>
              </div>
            </div>
          </div>
          <div className="dimondcarat-range mt-[22px]">
            <div className="title-icon">
              <h1>Cut</h1>
              <Image src={information} className="w-[17px]" />
            </div>
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
              <div className="px-[15px]  flex justify-between">
              <p>Excellent</p>
              <p>Very Good</p>
              <p>Good</p>
              <p>Fair</p>
              </div>
            </div>
          </div>
          <div className="dimondcarat-range">
            <div className="title-icon">
              <h1>Report</h1>
              <Image src={information} className="w-[17px]" />
            </div>
            <div className="report-input">
              <input type="text" placeholder="What Matters Most To You?" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiamondCarat;
