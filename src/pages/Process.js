import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Link from 'next/link'

const Process = () => {
  return (
    <>
    <Header />
      <div className='text-center mt-40 h-40'>
        <p className='text-4xl  italic'>Under Development...</p>
        <Link href={"./"}>
          <button className='mt-5 text-lg underline text-red-500'>Redirect to Home</button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Process