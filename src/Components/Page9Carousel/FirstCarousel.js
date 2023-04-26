import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ring_car from "../../../public/Images/page-9/carusal/1.jpg";
import earings1_car from "../../../public/Images/page-9/carusal/2.jpg";
import earings2_car from "../../../public/Images/page-9/carusal/3.jpg";
import bangles_car from "../../../public/Images/page-9/carusal/4.jpg";
import pendants_car from "../../../public/Images/page-9/carusal/5.jpg";


export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2 className="carousel-head mb-20">Discover A World Of Jewelnme</h2>

                <Slider {...settings}>
                    <div className="ml-12">
                        <div className="w-[360px] my-5 carousel_card ">
                            <Image className="h-[360px] w-[360px]" src={ring_car} alt="" />
                            <h2 className="">Rings</h2>
                            <p className=" mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">
                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={earings1_car} alt="" />
                            <h2 className="">Earings</h2>
                            <p className="mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">

                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={earings2_car} alt="" />
                            <h2 className="">Earings</h2>
                            <p className="mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">

                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={bangles_car} alt="" />
                            <h2 className="">Bangles</h2>
                            <p className="mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">

                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={pendants_car} alt="" />
                            <h2 className="">Pendants</h2>
                            <p className="mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">

                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={bangles_car} alt="" />
                            <h2 className="">Bangles</h2>
                            <p className="mbm:w-[360px] ">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="ml-12">

                        <div className="w-[360px] my-5 carousel_card">
                            <Image className="h-[360px] w-[360px]" src={ring_car} alt="" />
                            <h2 className="">Rings</h2>
                            <p className="mbm:w-[360px]">Giving a jewel is always
                                special. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                </Slider>

            </div>
        );
    }
}