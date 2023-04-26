import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import bangles_car from "../../../public/Images/page-9/carusal/4.jpg";
import { BsChevronCompactRight,BsChevronCompactLeft } from "react-icons/bs";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block" ,height:"50px", paddingTop:"16px",  borderRadius: "20px"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block",height:"50px", paddingTop:"16px", borderRadius: "14px" }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
        };
        return (
            <div className="flex flex-col items-center justify-center Stay_social mb-[80px]">
                <h1 className="mb-7"> Multiple items </h1>
                <p className="mb-[80px]">Follow @myjewelnme on Instagram to get inspired by Jewelnme stories.</p>
                <div className="w-[1300px] relative">
                    <div className="text-5xl text-[gray] absolute top-[42%] right-[-45px]">
                         <BsChevronCompactRight/>
                    </div>
                    <div className="text-5xl text-[gray] absolute top-[42%] left-[-45px]">
                         <BsChevronCompactLeft/>
                    </div>


                    <Slider {...settings}>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">

                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>

                        <div className="ml-5">
                            <Image className="w-[296px] h-[296px]" src={bangles_car} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}