import React from 'react'
import Header from './Header/Header'
import Contact_form from '@/Components/Contact_us/Contact_form'
import Footer from './Footer/Footer' 

const Contact_Us = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 class="mx-[100px] mt-[30px] pb-1 text-base"><span class="text-[#777D85]">Home</span> / Contact Us</h1>

                <div id="googleMap">
                    <iframe width="100%" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=705-A,%20Bestech%20Business%20Towers,%20Sector%2066,%20Mohali%20-%20160062&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

            </div>
            <div class="h-[94px] my-[60px] ">
                <p class="w-[976px] mx-auto text-center text-lg font-light">
                    Your questions or feedback are always welcome at Jeweln.me. Join in a conversation with one of our
                    Jewelry Consultants to help you make the right decision. Communicate the way you prefer. Need an
                    immediate answer?<br /> See our <span class="text-[#A18A66]">frequently asked questions.</span>
                </p>
            </div>
            <Contact_form />
            <Footer />
        </div>
    )
}

export default Contact_Us