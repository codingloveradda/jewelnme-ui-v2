import React, {useState} from 'react';
import Day from './Day';
import { RxCross2 } from "react-icons/rx";
import {BsArrowRight} from "react-icons/bs"

const Consult = ({closeModal}) => {

    const [showModal, setShowModel] = useState(false);

    
    return (
        <>
        <div className='modal-wrapper' onClick={closeModal}></div>
        <div className="modal-container flex justify-center items-center">
            <div className="box w-[1136px] relative h-[710px]">
                <div className="flex justify-end py-10 pr-10">
                    <RxCross2 onClick={closeModal} />
                </div>
                <div className="absolute top-[71px] left-[418px]">
                    <div className=" absolute w-[98%] h-[5px] top-[12px] right-1 bg-[#777D85]">
                        <div className="absolute w-0 h-[100%]"></div>
                    </div>
                    <div className=" flex justify-between w-[300px] text-white text-xl font-semibold">
                        <div className="flex justify-center items-center z-10 rounded-full px-[10px] bg-[#192537]">
                            <p>1</p>
                        </div>
                        <div className="flex justify-center items-center z-10 rounded-full px-2 bg-[#777D85]">
                            <p>2</p>
                        </div>
                        <div className="flex justify-center items-center z-10 rounded-full px-2 bg-[#777D85]">
                            <p>3</p>
                        </div>
                    </div>
                </div>
                <div className="title flex items-center flex-col mt-16 px-[140px]">
                    <h1>Consult With Our Sales Representative</h1>
                    <p className=" mt-[29px]"> Jewelnme has experts that can help you
                        make decisions about your jewelry. We offer consultations on the phone, email, or in-person to help you find
                        the perfect piece for your needs.
                    </p>
                </div>
                <div className="mode_box flex items-center flex-col mt-[122px]">
                    <p>Preferable Mode:</p>
                    <div className="mode flex gap-32 mt-9">
                        <div>
                            <input type="radio" />
                            <label>Video Call</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label>Phone Call</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label>Home Visit</label>
                        </div>
                    </div>
                </div>
                <div className='mt-36 mx-14'>
                    <a className="flex justify-end items-center gap-4" onClick={() => setShowModel(true)}>Next<BsArrowRight  /></a>
                    {showModal && <Day closeModal={closeModal} />}
                </div>
            </div>
        </div>
        </>

    );
}

export default Consult;