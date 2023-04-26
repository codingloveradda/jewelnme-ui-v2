import React from 'react';
import Image from 'next/image';
import Go from '../../../public/Images/Profile_Services/Go.png';
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";
import Link from 'next/link';

const Pickup = () => {
    return (
        <div className="model flex justify-center items-center py-[119px]">
            <div className="box w-[1136px] h-[710px]">
                <div className="pl-20 pt-10 pr-10 ">
                    <div className="flex justify-end">
                        <Image src={Cancle} className="w-4" />
                    </div>
                    <div className="panel flex justify-around items-center mt-7">
                        <h2>Address</h2>
                        <h1>Select Date & Time</h1>
                        <h2>Review & Confirm</h2>
                    </div>
                    <div className="select_day pt-20">
                        <div className="label">
                            <p>Select a day for pickup</p>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max gap-[18px] pt-12 ">
                            <div className="day pt-4 px-5">
                                <div className="pb-3">
                                    <p>2022</p>
                                </div>
                                <div className="pb-4">
                                    <h2>June</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-3">
                                <div className="pb-3">
                                    <p>MON</p>
                                </div>
                                <div>
                                    <h2>20</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>TUE</p>
                                </div>
                                <div>
                                    <h2>21</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>WED</p>
                                </div>
                                <div>
                                    <h2>22</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>THU</p>
                                </div>
                                <div>
                                    <h2>23</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>FRI</p>
                                </div>
                                <div>
                                    <h2>24</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>SAT</p>
                                </div>
                                <div>
                                    <h2>25</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>SUN</p>
                                </div>
                                <div>
                                    <h2>26</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-3">
                                <div className="pb-3">
                                    <p>MON</p>
                                </div>
                                <div>
                                    <h2>27</h2>
                                </div>
                            </div>
                            <div className="day pt-4 px-4">
                                <div className="pb-3">
                                    <p>TUE</p>
                                </div>
                                <div>
                                    <h2>28</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="select_time pt-16 pr-20">
                        <div className="label">
                            <p>Available time (IST) for pickup</p>
                        </div>
                        <div className="grid grid-cols-3 grid-auto-rows-auto grid-auto-cols-auto gap-x-5 gap-y-[18px] pt-9">
                            <div className="time py-4">
                                <p>10:00 AM - 12:00 PM</p>
                            </div>
                            <div className="time py-4">
                                <p>12:00 PM - 02:00 PM</p>
                            </div>
                            <div className="time py-4">
                                <p>02:00 PM - 04:00 PM</p>
                            </div>
                            <div className="time py-4">
                                <p>04:00 PM - 06:00 PM</p>
                            </div>
                            <div className="time py-4">
                                <p>06:00 PM - 08:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link href={"../Profile_Services/Confirm"} legacyBehavior><a className='flex justify-end items-center gap-8 mt-5 '>Next
                            <Image src={Go} className='w-[14px] h-[9px]' /></a></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pickup;