import React from 'react'
import Image from 'next/image'
import xasscher from "../../../public/Images/Header/Solitaires/group/2x/asscher2.png"
import xcushion from "../../../public/Images/Header/Solitaires/group/2x/cushion2.png"
import xemerald from "../../../public/Images/Header/Solitaires/group/2x/emerald2.png"
import xheart from "../../../public/Images/Header/Solitaires/group/2x/heart2.png"
import xmarquise from "../../../public/Images/Header/Solitaires/group/2x/marquise2.png"
import xoval from "../../../public/Images/Header/Solitaires/group/2x/oval2.png"
import xpear from "../../../public/Images/Header/Solitaires/group/2x/pear2.png"
import xprinces from "../../../public/Images/Header/Solitaires/group/2x/princes2.png"
import xradiant from "../../../public/Images/Header/Solitaires/group/2x/radiant2.png"
import xround from "../../../public/Images/Header/Solitaires/group/2x/round2.png"

const Shape = () => {
    return (
        <div className='shapes'>
            <div className="grid justify-items-center">
                <h2>Shape</h2>
                <div className="pt-8 text-center px-52">
                    <p>A common misunderstanding is that the term 'diamond cut' also refers to the diamond's shape.
                        Cut is what determines how well-cut your diamond is, whereas shape is the form into which it
                        was cut. Diamonds can be cut into various shapes, the best-known of which is probably the
                        round brilliant.</p>
                </div>
            </div>
            <div className="grid grid-cols-10 justify-items-center items-baseline pt-24">
                <div className="grid gap-6">
                    <Image src={xround} alt="round" />
                    <h3>Round</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xoval} alt="oval" />
                    <h3>Oval</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xcushion} alt="cushion" />
                    <h3>Cushion</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xpear} alt="pear" />
                    <h3>Pear</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xprinces} alt="princess" />
                    <h3>Princess</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xemerald} alt="emerald" />
                    <h3>Emerald</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xmarquise} alt="marquise" />
                    <h3>Marquise</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xasscher} alt="asscher" />
                    <h3>Asscher</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xradiant} alt="radiant" />
                    <h3>Radiant</h3>
                </div>
                <div className="grid gap-6">
                    <Image src={xheart} alt="heart" />
                    <h3>Heart</h3>
                </div>
            </div>
        </div>
    )
}

export default Shape