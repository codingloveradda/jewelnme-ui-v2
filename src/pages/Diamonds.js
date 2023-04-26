import React from 'react'
import Header from './Header/Header'
import Details from '@/Components/Diamonds/Details'
import Footer from './Footer/Footer'
import diamondBG from "../../public/Images/Banner_Pages/diamond.png";

const Diamonds = () => {
  return (
    <>
        <Header />
        <div
            className="diamond-img h-[550px]  relative "
            style={{
              backgroundImage: `url(${diamondBG.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
          <h1>DIAMONDS</h1>  
        </div>
        <Details />
        <Footer />
    </>
  )
}

export default Diamonds