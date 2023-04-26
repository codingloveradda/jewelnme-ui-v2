import React from 'react'
import Image from 'next/image'
import Gold from '../../../public/Images/Banner_Pages/Gold.png'
import Silver from '../../../public/Images/Banner_Pages/Silver.png'
import Platinum from '../../../public/Images/Banner_Pages/Platinum.png'
import Left_Line from '../../../public/Images/Banner_Pages/Group 19263.png'
import Right_Line from '../../../public/Images/Banner_Pages/Group 19262.png'

const Common_Metal = () => {
    return (
        <div className='common_metals px-[100px]'>
            <div className="paragraph text-center py-20">
                <p>Gemstone and diamond jewelry can be paired with a variety of precious metals. The metal you choose can
                    depend on your preference in durability, look and cost. Factors that set different types of metals apart
                    are also the luster (shine), weight and color of the metal. With Clarity crafts jewelry using gold, and
                    platinum. We are also committed to using eco-friendly sources of metal. These are among the most durable
                    and visually appealing metals, and are most commonly used in crafting jewelry. These metals are
                    classified as precious as they are more rare and expensive than other commonly used metals.</p>
            </div>
            <div className="flex justify-center items-center mt-10 mr-10">
                <Image src={Left_Line} alt="line" />
                <div className="title">
                    <p>The Most Common Precious Metals</p>
                </div>
                <Image src={Right_Line} alt="line" />
            </div>
            <div className='metals'>
                <div className='mt-24'>
                    <h2>1. Gold</h2>
                    <div className="pr-60">
                        <p>Probably the most beloved metal of all, gold has a long history as the “chosen metal” of
                            royalty. From pharaohs in Egypt to the Queen of England herself, royalty recognizes the
                            regal nature of gold. People love gold not only because of its beauty but also its practical
                            nature. It can transform into any shape, it never tarnishes or corrodes, and jewelers can
                            reuse old, damaged gold to create new jewelry.
                        </p>
                        <p>In its natural state, gold is soft and carries a yellowish hue. As such,
                            jewelers combine other metals with gold to create a stronger product that comes in a
                            variety of colors:</p>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-48">
                    <div>
                        <ul className="list-disc">
                            <li>
                                <span> Yellow gold</span> is a combination of pure gold, silver,
                                and copper. It boasts a regal, warm yellow hue that is used in engagement rings and high-end
                                jewelry. Yellow gold is also great for decadent statement pieces, as it provides dramatic
                                flair for the wearer.
                            </li>
                            <li>
                                <span>Rose gold</span> combines pure gold with copper, which
                                gives it a pink, “rosy” color. Purity for this metal depends on what color pink the
                                wearer requires, as it can be a darker rose or a lighter, brighter pink. Originally an
                                underrated metal, rose gold has become a more common choice for precious jewelry over the
                                last few years. Additionally, it’s used in engagement rings as a romantic alternative to
                                the standard grey-white and yellow tones of other metals.
                            </li>
                            <li>
                                <span>White gold</span> mixes pure gold with silver, nickel, or
                                palladium. The ethereal white color of this gold makes it a perfect option for those
                                with refined taste, and it’s a less expensive alternative to platinum for engagement rings.
                                However, jewelers plate a layer of rhodium onto the surface of white gold jewelry
                                to maintain that glowing white hue. As such, wearers must bring white gold items to
                                a jeweler every other year to touch up the rhodium and prevent the less lustrous natural
                                hue from showing.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={Gold} className="w-[480px] h-[500px] mr-20" alt="gold" />
                    </div>
                </div>
                <div className="pr-32">
                    <p>You can identify the purity of gold jewelry by reading the number of “karats” shown in
                        the hallmark. Karats measure the purity of gold alloy, which depends on the amount of other
                        metals mixed in to create a stronger material. As such, different karats of jewelry have
                        different hardness, scratch resistance, etc.</p>
                </div>
                <div className="grid grid-flow-col gap-20 mt-36">
                    <div>
                        <Image src={Platinum} alt="platinum" />
                    </div>
                    <div className="mt-9">
                        <h2>2. Platinum</h2>
                        <div>
                            <p>Naturally beautiful and strong, bright white platinum is often the first indicator of
                                high-end jewelry. It’s a rare metal with a purity rating of 900 (90%) or 950 (95%)—mixed
                                only with a little bit of palladium, iridium, or rhodium for added strength. It’s also
                                hypoallergenic, which makes it a sought after option for wearers with sensitive skin.
                            </p>
                            <p>A common misconception with jewelry buyers is that upgrading to platinum
                                means the item will never suffer any damage. Although it is durable, platinum jewelry
                                CAN scratch or patina over the years with daily wear or abuse. However, both situations
                                are easily remedied through proper cleaning with a soft jewelry cleaning cloth.
                            </p>
                            <p>You can find platinum in most jewelry stores, often beset with diamonds and
                                other gemstones. But, platinum itself shines just as bright as any stone, and it is
                                often used as a standalone material in wedding bands.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-flow-col gap-10 mt-24">
                    <div className="mt-32">
                        <h2>3. Silver</h2>
                        <div>
                            <p>A soft, malleable metal in its pure state, silver is a greyish-white metal commonly used
                                in jewelry. In fact, designers often combine silver with other metals to create a more
                                durable alloy due to its pliability. A “925” stamp means a piece is “sterling silver” or 92.5%
                                pure silver mixed with metals like copper. In fact, Tiffany & Co. centered their entire
                                Return to Tiffany line around the 925 stamp, as they were the first to adopt the .925 silver
                                standard in the U.S.!
                            </p>

                            <p>Silver is a favorite metal for daily wear jewelry, as it is less expensive
                                than other metals. Although it’s not resilient enough for wedding and engagement rings,
                                silver is used for necklaces, earrings, bracelets, and fashion rings.</p>
                            <p> However, despite its buyer-friendly price, silver jewelry scratches, and it will oxidize if worn
                                too often over time. If you plan to wear silver regularly, proper cleaning and storage will
                                help your piece last much longer than anticipated.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image src={Silver} alt="silver" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Common_Metal