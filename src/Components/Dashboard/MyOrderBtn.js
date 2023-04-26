import React from "react";
import Image from "next/image";
import Link from "next/link";
import ring from "../../../public/Images/SidebarIMG/Ring.jpeg";

const MyOrderBtn = () => {
  const [showClean, setShowClean] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showRepair, setShowRepair] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  
  return (
    <div className="fresh-P46">
    <div className="fresh-P46-top">
      <div className="fresh-img replace">
        <Image src={ring} alt="ring" className="rounded-xl" />
      </div>
      <div className="fresh-title">
        <div className="flex justify-between fresh-first">
          <p>
            Arcana Fresh Diamond Studs
            <span> URX1GX15 </span>
          </p>
          <p>₹ 25,000</p>
        </div>
        <div className="fresh-second">
          <p className="py-2 px-3">
            Summery No.: <span> 000000000000 </span>
          </p>
          <p className="py-2 px-5 ">Bill No.: 00000000000</p>
          <p className="py-2 px-4">Bill Date: DD/MMM/YYYY</p>
          <p className="py-2 px-7">Occasion: Engagement</p>
        </div>

        <div className="fresh-btn">
            <button onClick={() => setShowClean(true)}>Clean My Jewel</button>
            {showClean && <Clean closeModal={() => setShowClean(false)} />}

            <button onClick={() => setShowCustomize(true)}>Customize My Jewel</button>
            {showCustomize && <Customize closeModal={() => setShowCustomize(false)} />}

            <button onClick={() => setShowRepair(true)}>Repair My Jewel</button>
            {showRepair && <Repair closeModal={() => setShowRepair(false)} />}

            <button onClick={() => setShowExchange(true)}>Exchange My Jewel</button>
            {showExchange && <Exchange closeModal={() => setShowExchange(false)} />}
          </div>
      </div>
    </div>
  </div>
  );
};

export default MyOrderBtn;
