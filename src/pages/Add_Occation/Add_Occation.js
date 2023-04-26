import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cancle from "../../../public/Images/Profile_Services/Cancle.png"

const Add_Occation = () => {
    return (
        <div className="model flex justify-center items-center py-[119px]">
            <div className="box w-[1136px] h-[710px] pl-20 pt-10 pr-10">
                <div className="flex justify-end">
                    <Link href={"../MyInformation/MyInformation"} ><Image src={Cancle} alt="cancle" className="w-4" /></Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold mt-4">Add Occation</h2>
                    <p className="mt-10 text-lg">Add more occasions to get exclusive offers for your loved ones
                        & special occasions.</p>
                </div>
                <form>
                    <div className="form_data grid grid-cols-2 items-center pt-[50px] pr-20 gap-[50px]">
                        <div className="flex flex-col">
                            <label>Occasion Name</label>
                            <select className="py-3.5 px-2">
                                <option>Select Occasion</option>
                                <option value="">Others</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label>Occasion Date</label>
                            <input type="date" className='py-2.5 px-2' />
                        </div>
                        <div className="flex flex-col">
                            <label>Relationship Name</label>
                            <select className="py-3.5 px-2">
                                <option value="">Select Relationship</option>
                                <option>Brother</option>
                                <option value="">Sister</option>
                                <option value="">Son</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="action_btn flex justify-end pr-10 mt-[179px]">
                    <Link href={"../MyInformation/MyInformation"} className="px-[50px] py-2.5">Save Occasion</Link>
                </div>
            </div>
        </div>
    )
}

export default Add_Occation