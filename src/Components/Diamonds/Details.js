import React from 'react'
import Image from 'next/image'
import Image_4c from '../../../public/Images/Diamonds/4c.png'
import Left_Line from '../../../public/Images/Banner_Pages/Group 19263.png'
import Right_Line from '../../../public/Images/Banner_Pages/Group 19262.png'
import Carat from '../../../public/Images/Diamonds/carat.png'
import Color from '../../../public/Images/Diamonds/color.png'
import Clarity from '../../../public/Images/Diamonds/clarity.png'
import Cut from '../../../public/Images/Diamonds/cut.png'
import Diamond_ring from '../../../public/Images/Diamonds/Diamond ring.png'
import Shape from './Shape'


const Details = () => {
    return (
        <div className='diamonds'>
            <div className="paragraph text-center py-20 px-20">
                <p>We know you’re here because you only want the best and we would love to help you find the perfect
                    diamond for you. We also know that buying diamonds can be a little overwhelming, but that doesn’t
                    mean that you should ever settle or stress! So just sit back with a cup of coffee and let us walk
                    you through everything you need to know before you buy that sparking diamond!</p>
                <p className="pt-4">No two diamonds are
                    alike. Each one is unique. This is why over the years a universal standard for identifying diamonds
                    has been set. The quality and value of a diamond is defined according to the 4Cs: carat, colour,
                    clarity and cut. Our diamond grading reports cover all 4Cs of diamond certification for loose
                    diamonds and diamond jewellery, ensuring consumers know exactly what diamond they are buying.</p>
            </div>
            
            <div className="flex justify-center">
                <Image src={Image_4c} alt="4c" />
            </div>
            <div className="flex justify-center items-center pt-2">
                <Image src={Left_Line} alt="line" />
                <div className="title px-7">
                    <p>THE 4 CS OF A DIAMOND</p>
                </div>
                <Image src={Right_Line} alt="line" />
            </div>
            <div className="custom_diamond grid gap-[200px]">
                <div className="grid justify-items-center px-48">
                    <h2>Carat</h2>
                    <div className="text-center px-36 pt-5">
                        <p>Carat refers to a diamond’s weight. Generally speaking, the higher the carat weight, the
                            larger the diamond appears and the more valuable the stone. How large a diamond appears
                            also depends on its proportions. For example, a one-carat diamond that is wider but has
                            shallow proportions will appear larger than a one-carat diamond with excellent
                            proportions.</p>
                    </div>
                    <div className="pt-20 pb-10">
                        <Image src={Carat} alt="carat" />
                    </div>
                    <h3>1.75 ct ( 7.60 mm )</h3>
                    <div className="flex items-center pt-6">
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-minus"></i>
                        </div>
                        <div className="px-8">
                            <input type="range" className="accent-black w-[739px]" />
                        </div>
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="text-center italic pt-12 px-5">
                        <p><span>Tip:</span> Diamond prices go up exponentially as carat weight
                            increases. They increase more at certain “magic sizes,” such as 0.5, 1.0, 1.5, 2.0 carats etc.
                            Buying right below a “magic size,” such as purchasing a 0.95 carat diamond instead of a 1.0
                            carat diamond, can save money without making much of a difference in visual impact.</p>
                    </div>
                </div>
                <div className="grid justify-items-center px-20">
                    <h2>Colour</h2>
                    <div className="text-center pt-5">
                        <p>Color measures a diamond’s absence of color. This is because most “colorless” or “white”
                            diamonds actually contain trace amounts of yellow, brown or gray color. The less color in a
                            diamond, the more desirable and valuable it is. There are 23 color grades on the D-to-Z
                            scale, with D meaning that a diamond has no detectable color at all and Z meaning that a
                            diamond has “light” color. Any diamond beyond the Z color grade is a fancy color diamond and
                            is evaluated on a different color scale.</p>
                    </div>
                    <div className="pt-9">
                        <Image src={Color} alt="color" />
                    </div>
                    <h3>White</h3>
                    <div className="flex items-center pt-6">
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-less-than"></i>
                        </div>
                        <div className="px-8 ">
                            <input type="range" className="accent-black w-[739px]" />
                        </div>
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-greater-than"></i>
                        </div>
                    </div>
                    <div className="text-center italic pt-14 px-64">
                        <p><span>Tip:</span> D, E and F grade diamonds tend to be extremely rare and valuable. G and
                            H diamonds are typically considered good value. Color becomes more visible in the I grade
                            and below.</p>
                    </div>
                </div>

                <div className="grid justify-items-center px-20">
                    <h2>Clarity</h2>
                    <div className="text-center pt-5">
                        <p>Clarity measures the amount, size and placement of internal ‘inclusions’ and external
                            ‘blemishes.’ Inclusions include small crystals or fissures within the diamond. Blemishes
                            include chips. Grades range from ‘Flawless,’ which means a diamond has no visible
                            imperfections at 10x magnification, to ‘Included,’ which means a diamond contains a
                            significant number of imperfections. Diamonds with grades down to VS2 (Very Slightly
                            Included) or SI1 (Slightly Included) do not typically have eye-visible inclusions. These
                            diamonds can be good value. Diamonds I1 (Included) or lower have inclusions that are easily
                            seen and can appear less attractive; some of these inclusions might also impact the
                            diamond’s durability.</p>
                    </div>
                    <div className="pt-16 pb-8">
                        <Image src={Clarity} alt="clarity" />
                    </div>
                    <h3>Very Small Inclusions</h3>
                    <div className="flex items-center pt-6">
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-less-than"></i>
                        </div>
                        <div className="px-8">
                            <input type="range" className="accent-black w-[739px]" />
                        </div>
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-greater-than"></i>
                        </div>
                    </div>
                    <div className="text-center italic pt-16 px-44">
                        <p><span>Tip:</span> Brilliant-cut diamonds show clarity characteristics less than step cut
                            diamonds do, because the pattern of the facet arrangement obscures inclusions better. If you
                            want to buy a step cut diamond (such as an emerald cut), you may have to go higher in color
                            and clarity than with a brilliant-cut diamond.</p>
                    </div>
                </div>

                <div className="grid justify-items-center px-20">
                    <h2>Cut</h2>
                    <div className="text-center pt-5">
                        <p>Cut is perhaps the most crucial of the 4Cs. Cut does not refer to a diamond’s shape, but
                            rather to the quality of workmanship (proportion and arrangement of facets) for round
                            brilliant diamonds.* The quality of a diamond’s cut determines the amount of brilliance,
                            sparkle and fire that a diamond shows. Grades range from ‘Excellent’ to ‘Poor.’</p>
                    </div>
                    <div className="pt-16">
                        <Image src={Cut} alt="cut" />
                    </div>
                    <div className="flex items-center pt-6">
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-less-than"></i>
                        </div>
                        <div className="px-8">
                            <input type="range" className="accent-black w-[739px]" />
                        </div>
                        <div className="px-4 pt-3 pb-2 border rounded-lg">
                            <i className="fa-sharp fa-solid fa-greater-than"></i>
                        </div>
                    </div>
                    <div className="text-center italic pt-14 font-light">
                        <p><span>Tip:</span> Most diamonds on the market have ‘Excellent’ to ‘Very Good’ cut.
                            Diamonds with a ‘Poor’ cut grade will generally appear lifeless and dull.</p>
                    </div>
                    <div className="text-sm text-[#A18A66] font-semibold pt-10">
                        <h4>Jewelnme's Recommended : Good</h4>
                    </div>
                </div>
            </div>

            <Shape />

            <div className="text-center bg-[#F9F9F9] px-[100px] py-32">
                <h2>Things to Consider When You Buy Diamond Jewellery</h2>
                <div className="px-[155px] pt-16">
                    <p>When you buy diamond jewellery, always pay attention to the cut because it can make a lot of
                        difference to its appeal. For instance, if you want your diamond to sparkle at the optimal level, a
                        round brilliant cut is always the best option. An emerald cut stone, on the other hand, will have an
                        understated sparkle. Likewise, when you want more value for the money, go for a cut that makes the
                        stone appear larger than it is. Marquise or oval cut diamonds are your best options in this regard.
                        When looking for unique appeal and charm, you can count on the trillion cut or any fancy cut
                        diamonds.</p>
                    <p className="pt-4">So, now you know what to look for when you buy diamonds next time, don’t you? Make an
                        informed decision and cherish your diamonds forever. After all, diamonds are forever!</p>
                </div>
            </div>
            <div className="">
                <div className="grid grid-flow-col px-[100px] pt-[179px] pb-[209px] gap-32">
                    <div className="pl-[78px]">
                        <Image src={Diamond_ring} alt="diamond_ring" />
                    </div>
                    <div className="pt-[72px] pr-[202px]">
                            <h2>How to Care for Your Diamond</h2>
                        <div className="pt-6">
                            <p>Once every week, clean your diamond jewellery in lukewarm soap water and rub it down gently
                                with a brush, to remove the dirt and grime from the surface and ensure a long lasting shine.
                            </p>
                            <p className="pt-4">Remove your diamond jewellery when you go swimming or while doing household
                                chores, so that
                                the grime doesn’t make your jewellery look dull.</p>
                            <p className="pt-4">Keep your jewellery in separate boxes to
                                reduce the chances of scratches on the metal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details