import React from 'react'
import Header from './Header/Header'
import Content from '@/Components/Authenticity/Content'
import Footer from './Footer/Footer'

const Authenticity = () => {
  return (
    <div>
      <Header />
      <div className='text-center px-[200px] py-20 text-lg font-light'>
        <p>
          A certificate of authenticity gives you the peace of mind that the piece of jewelry you
          purchase is important to us to verify its source, features and authentic nature. At Jewelnme,
          every piece of jewellery is hallmarked and certified by a laboratory.</p>
        <p className='mt-5'> The certificate of authenticity attests to the fact that we know every piece deeply,
          and that it is a singular item with its own unique identity, and it has its own story.
        </p>
      </div>
      <Content />
      <Footer />
    </div>
  )
}

export default Authenticity