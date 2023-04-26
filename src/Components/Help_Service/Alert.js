import React from 'react';
import {TbAlertTriangle} from "react-icons/tb"

const Alert = ({ closeModal }) => {
    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[624px] h-[433px]">
                    <div className="alert flex flex-col items-center px-[59px] mt-12">
                        <div>
                            <span className="text-4xl ml-9"><TbAlertTriangle/></span>
                            <h2 className="mt-5">Alert !</h2>
                        </div>
                        <div className="mt-7 text-center">
                            <p>The value you entered does not match the selected product.
                                If you update the value, the product will be removed.</p>
                            <div>
                                <input type="checkbox" className="mt-8" /><label>Check this box, If you
                                    want to add the product to the Whishlist.</label>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-10">
                            <a className="px-20 py-3">Cancel</a>
                            <a className="px-20 py-3">Update</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Alert;