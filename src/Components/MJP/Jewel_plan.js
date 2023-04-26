import React, { useState } from 'react'
import Image from 'next/image'
import Tag_Line from '../../../public/Images/MJP_Plan/Tag Line.png'
import Contact from '../../../public/Images/MJP_Plan/Contact .jpg'
import Consult from '@/pages/Book_Appointment/Consult'


const Jewel_plan = () => {

  const [bookApp, setBookApp] = useState(false);

  return (
    <>
      <div className="jewel_plan relative">
        <h1 className="opacity-10">LET'S START WITH</h1>
        <div className="bg-img absolute top-[100px]">
          <Image src={Tag_Line} alt="tag Line" />
        </div>
      </div>

      <div className="contact_me relative mt-[100px]">
        <Image src={Contact} alt='contact us' className='h-[550px]'/>
        <div className="absolute top-44 left-40">
          <h1>Consult With Our Sales Representative</h1>
          <p>Jewelnme has experts that can help you make decisions
            about your jewelry. We offer consultations on the phone,
            email, or in-person to help you find the perfect piece for your needs.
          </p>
          <a className="px-9 py-3" onClick={() => setBookApp(true)}>Book an Appointment <span className="ml-6"><i
            className="fa-solid fa-arrow-right-long"></i></span></a>
            {bookApp && <Consult closeModal={() => setBookApp(false)} />}
        </div>
      </div>
    </>
  )
}

export default Jewel_plan