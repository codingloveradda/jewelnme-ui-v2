import Image from "next/image";

import xasscher from "../../../public/Images/Header/Solitaires/group/2x/asscher2.png";
import xcushion from "../../../public/Images/Header/Solitaires/group/2x/cushion2.png";
import xemerald from "../../../public/Images/Header/Solitaires/group/2x/emerald2.png";
import xheart from "../../../public/Images/Header/Solitaires/group/2x/heart2.png";
import xmarquise from "../../../public/Images/Header/Solitaires/group/2x/marquise2.png";
import xoval from "../../../public/Images/Header/Solitaires/group/2x/oval2.png";
import xpear from "../../../public/Images/Header/Solitaires/group/2x/pear2.png";
import xprinces from "../../../public/Images/Header/Solitaires/group/2x/princes2.png";
import xradiant from "../../../public/Images/Header/Solitaires/group/2x/radiant2.png";
import xround from "../../../public/Images/Header/Solitaires//group/2x/round2.png";

const Stones = () => {
    return (
        <div className="lapl:px-[100px] bg-white Solitaires_diamonds_tab h-[550px]">
            <h1 className="text-3xl text-center mb-[116px]">Shop Solitaires by Shape</h1>

            <div className="grid grid-cols-5 ">
                {/* <!-- Stone Cards --> */}
                <div className="tab-view">
                    <div className="w-[115px] h-[140px] flex flex-col gap-[20px] items-center">
                        <div className="w-[115px] flex justify-center h-[120px]">
                            <Image src={xround} alt="round" />
                        </div>
                        <p className="mr-2">Round</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px]">
                            <Image src={xoval} alt="oval" />
                        </div>
                        <p className="text-start ml-4">Oval</p>
                    </div>
                </div>


                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[130px] ">
                        <div className="w-[115px] h-[120px] flex ">
                            <Image src={xcushion} alt="cushion" className="self-center" />
                        </div>
                        <p className="text-start ml-2">Cushion</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px]  flex flex-col">
                            <Image src={xpear} alt="Pear" className="mt-[10px]" />
                        </div>
                        <p className="text-start ml-5 justify-self-center">Pear</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xprinces} alt="Princess" className="mt-[20px]" />
                        </div>
                        <p className="text-start ml-2">Princess</p>
                    </div>
                </div>
                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xemerald} alt="emerald" className="mt-[10px]" />
                        </div>
                        <p className="text-start ml-2">Emerald</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xmarquise} alt="marquise" className="mt-[0px]" />
                        </div>
                        <p className="text-start ml-2">Marquise</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xasscher} alt="asscher" className="mt-[22px]" />
                        </div>
                        <p className="text-start ml-3">Asscher</p>
                    </div>
                </div>

                <div className="tab-view pl-8">
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xradiant} alt="Radiant" className="mt-[19px]" />
                        </div>
                        <p className="text-start ml-3">Radiant</p>
                    </div>
                </div>

                <div className="tab-view pl-8">

                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xheart} alt="heart" className="mt-[19px]" />
                        </div>
                        <p className="text-start ml-5 ">Heart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stones;