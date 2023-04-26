import React from 'react'
import Link from 'next/link'
import Header4 from '@/Components/Header_Form/Header-4'
import Form_Heading from '@/Components/MJP_Enrollment_form/Form_Heading'
import Footer2 from '@/Components/Footer-2/Footer2'

const Form = () => {
    return (
        <div>
            < Header4 />
            <Form_Heading />
            <div className='flex flex-col justify-center items-center px-[440px] '>
                <div className="grid grid-flow-col items-center py-16">
                    <div className="self_btn px-14 py-2.5">
                        <a href="#">Self</a>
                    </div>
                    <div className="action_btn ">
                        <a className='px-12 py-3.5'>Others</a>
                    </div>
                </div>
                
                <div className=" mt-[47px]">
                    <form className="form_data grid grid-cols-2 gap-[50px]">
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Rachel"
                                className="w-full mt-[10px] p-2" />
                        </div>
                        <div>
                            <label>Relationship with account holder</label>
                            <input type="text" placeholder="Brother"
                                className="w-full mt-[10px] p-2" />
                        </div>
                        <div>
                            <label>Nominee's Name</label>
                            <input type="text" placeholder="Rachel"
                                className="w-full mt-[10px] p-2" />
                        </div>
                        <div>
                            <label>Relationship with nomanee</label>
                            <input type="text" placeholder="Brother"
                                className="w-full mt-[10px] p-2" />
                        </div>
                        <div>
                            <label>Mobile Number (Optional)</label>
                            <input type="text" placeholder="+91 000 000 0000"
                                className="w-full mt-[10px] p-2" />
                        </div>
                    </form>
                </div>
                
                <div className="action_btn mt-28 mb-[60px]">
                    <Link href={"./Form_3"} className="py-3.5 px-12">Next</Link>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Form