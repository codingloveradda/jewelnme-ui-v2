import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import drop from "../../../public/Images/Dashboard/Drop.png";
import information from "../../../public/Images/Dashboard/information.png";

function OtherFilter(props) {
    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
        {/* solitair shape and diamond price */}
        <div className="shape-price">
          <div className="dimondcarat flex flex-col">
            <div className="dimondcarat-range">
              <div className="title-icon">
                <h1>L:W Ratio</h1>
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
                <h1>Polish</h1>
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
            
                </div>
              </div>
            </div>
            <div className="dimondcarat-range">
              <div className="title-icon">
                <h1>Table %</h1>
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
          </div>
          <div className="drop-icon">
            <Image src={drop} className="rotate-180" />
          </div>
          <div className="dimondcarat flex flex-col">
            <div className="dimondcarat-range">
              <div className="title-icon">
                <h1>Fluoresence</h1>
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
                <p>None</p>
                <p>Faint</p>
                <p>Medium</p>
                <p>Strong</p>
                <p>Very Strong</p>
                </div>
              </div>
            </div>
            <div className="dimondcarat-range mt-[22px]">
              <div className="title-icon">
                <h1>Symmetry</h1>
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
                </div>
              </div>
            </div>
            <div className="dimondcarat-range">
              <div className="title-icon">
                <h1>Depth %</h1>
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
          </div>
        </div>
      </>
    );
}

export default OtherFilter;