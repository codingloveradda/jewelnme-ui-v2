import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Repair = ({closeModal}) => {
    return (
        <>
        <div className='modal-wrapper' onClick={closeModal}></div>
        <div className="modal-container flex justify-center items-center">
            <div className="w-[1136px] h-[710px] bg-white">
                <div className="pl-4 pt-10 pr-10">
                    <div className="flex justify-end">
                        <Image src={Cancle} alt="cancle" className="w-4"  onClick={closeModal} />
                    </div>
                    <div className="grid grid-flow-col auto-cols-max gap-11">
                        <div className="mt-20">
                            <Image src={Ring} alt="ring" />
                        </div>
                        <div className="product_option mt-10 w-ful">
                            <h1>Product Condition</h1>
                            <div className="flex flex-col mt-10">
                                <div className='flex gap-[150px]'>
                                    <div>
                                        <input type="radio" />
                                        <label for="">Dent/Scratch</label>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <label for="">Breakage</label>
                                    </div>
                                </div>
                                <div className='mt-11'>
                                    <input type="radio" />
                                    <label for="">Missing a part</label>
                                </div>
                            </div>
                            <div className="py-10 px-6">
                                <div className="flex gap-[170px]">
                                    <div>
                                        <input type="radio" />
                                        <label for="">Diamond</label>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <label for="">Metal Piece</label>
                                    </div>
                                </div>
                                <div className="flex gap-12 mt-7">
                                    <div>
                                        <h2>Do you have the missing part?</h2>
                                        <div className="flex gap-[70px] mt-5">
                                            <div>
                                                <input type="radio" />
                                                <label for="">Yes</label>
                                            </div>
                                            <div>
                                                <input type="radio" />
                                                <label for="">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>Do you have the missing part?</h2>
                                        <div className="flex gap-[70px] mt-5">
                                            <div>
                                                <input type="radio" />
                                                <label for="">Yes</label>
                                            </div>
                                            <div>
                                                <input type="radio" />
                                                <label for="">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Comments (required)</p>
                                <textarea rows="2" cols="60"
                                    placeholder="Describe what's wrong with the product." className="mt-3.5 py-2 px-3.5"></textarea>
                            </div>
                            <div className="action_btn flex justify-end mt-7">
                            <Link href={"../Profile_Services/Address"} legacyBehavior><a className="px-[75px] py-2">Schedule Pickup</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Repair;