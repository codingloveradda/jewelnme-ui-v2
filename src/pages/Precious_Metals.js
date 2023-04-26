import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Common_Metal from '@/Components/Metal/Common_Metal'
import Other_Metals from '@/Components/Metal/Other_Metals'

const Precious_Metals = () => {
  return (
    <div>
      <Header />
      <Common_Metal />
      <Other_Metals />
      <Footer />
    </div>
  )
}

export default Precious_Metals