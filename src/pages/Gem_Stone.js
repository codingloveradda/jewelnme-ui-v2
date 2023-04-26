import React from 'react'
import Header from './Header/Header'
import Birthstones from '@/Components/Gem_Stone/Birthstones'
import Footer from './Footer/Footer'
import Link from 'next/link'

const Gem_Stone = () => {
    return (
        <div>
            <Header />
            <Birthstones />
            <Footer />
        </div>
    )
}

export default Gem_Stone