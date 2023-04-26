import React from 'react'
import Link from 'next/link'
import Header4 from '@/Components/Header_Form/Header-4'
import Form_Heading from '../../Components/MJP_Enrollment_form/Form_Heading'
import Form_Details from '../../Components/MJP_Enrollment_form/Form_Details'
import Footer2 from '@/Components/Footer-2/Footer2'


const Form_1 = () => {
    return (
        <div>
            <Header4 />
            <Form_Heading />
            <Form_Details />
            <Footer2 />
        </div>
    )
}

export default Form_1