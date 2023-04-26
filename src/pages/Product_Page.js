import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import ProductCardP9 from '@/Components/ProductCardP9/ProductCardP9';
import AdditionTable from '@/Components/Product_PageC/AdditionTable';
import Product_Detail from '@/Components/Product_PageC/Product_Detail';
import Product_Image from '@/Components/Product_PageC/Product_Image';
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import add from "../../../public/Images/Dashboard/add.png";
import React from "react";
import Slider from "react-slick";

function Product_Page(props) {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
     <>
      <Header />
        <div className='flex laps:gap-[90px] tabs:gap-[30px]'>
            <Product_Image />
            <Product_Detail />
        </div>
        <div className='lapl:hidden block'>
          <AdditionTable />
        </div>
        <div className='laps:py-20  laps:px-[100px] px-[26px] py-10'>
        <h2 className='text-center laps:text-4xl text-2xl'>You May Also Like</h2>
        <div className='flex mt-20'>
         <Slider {...settings} className="w-full">
             <div>
             <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
          </Slider>
        </div>
        </div>
        <div className='laps:py-20 laps:px-[100px] px-[26px] py-10'>
        <h2 className='text-center laps:text-4xl text-2xl'>Similar Products</h2>
        <div className='flex mt-20'>
        <Slider {...settings} className="w-full">
             <div>
             <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
          </Slider>
        </div>
        </div>
        <div className='laps:py-20 laps:px-[100px] px-[26px] py-10'>
        <h2 className='text-center laps:text-4xl text-2xl'>Recently Viewed</h2>
        <div className='flex mt-20'>
        <Slider {...settings} className="w-full">
             <div>
             <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
             <div>
               <ProductCardP9 />
             </div>
          </Slider>
        </div>
        </div>
      <Footer />
     </>
    );
}

export default Product_Page;