import React from 'react'
import Image from 'next/image'
import Left_Line from '../../../public/Images/Banner_Pages/Group 19263.png'
import Right_Line from '../../../public/Images/Banner_Pages/Group 19262.png'
import Garnet from '../../../public/Images/Gem_stone/garnet.png'
import Amethyst from '../../../public/Images/Gem_stone/amethyst.png'
import Diamond from '../../../public/Images/Gem_stone/diamond.png'
import Emerald from '../../../public/Images/Gem_stone/emerald.png'
import Pearl from '../../../public/Images/Gem_stone/pearl.png'
import Ruby from '../../../public/Images/Gem_stone/ruby.png'
import Peridot from '../../../public/Images/Gem_stone/peridot.png'
import Sapphire from '../../../public/Images/Gem_stone/sapphire.png'
import Tourmaline from '../../../public/Images/Gem_stone/tourmaline.png'
import Citrine from '../../../public/Images/Gem_stone/citrine.png'
import Topaz from '../../../public/Images/Gem_stone/topaz.png'

const Birthstones = () => {
    return (
        <div className="birthstones px-[100px]">
            <div className="paragraph text-center py-20">
                <p>Gemstone and diamond jewelry can be paired with a variety of precious metals. The metal you choose can
                    depend on your preference in durability, look and cost. Factors that set different types of metals apart
                    are also the luster (shine), weight and color of the metal. With Clarity crafts jewelry using gold, and
                    platinum. We are also committed to using eco-friendly sources of metal. These are among the most  durable
                    and visually appealing metals, and are most commonly used in crafting jewelry. These metals are
                    classified as precious as they are more rare and expensive than other commonly used metals.</p>
            </div>
            <div className="flex justify-center items-center mt-[100px] ">
                <Image src={Left_Line} alt="line" />
                <div className="title">
                    <p>The Birthstones</p>
                </div>
                <Image src={Right_Line} alt="line" />
            </div>

            <div className="gems pt-[100px] grid gap-y-48 pb-[300px]">
                <div className="grid grid-cols-2 gap-40">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Garnet} alt="garnet" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Garnet</h2>
                            <div className="pt-6">
                                <p>Garnets are a set of closely related minerals forming a group, with
                                    gemstones in almost every color.</p>
                                <p>The garnet group of related mineral species offers gems of every hue,
                                    including fiery red pyrope, vibrant orange spessartine, and rare intense-green
                                    varieties of grossular and andradite.</p>
                            </div>
                            <h3>Birthstone - January</h3>
                            <p>“Garnet’s virtues have been long
                                believed to include passion, friendship, success, loyalty and faith.”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Amethyst} alt="amethyst" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Amethyst</h2>
                            <div className="pt-6">
                                <p>The essence of the color purple, amethyst is beautiful enough for crown jewels yet
                                    affordable enough for class rings.</p>
                                <p>Purple variety of the mineral quartz, often forms large,
                                    six-sided crystals. Fine velvety-colored gems come from African and South American
                                    mines. In demand for jewelry at all price points.</p>
                            </div>
                            <h3>Birthstone - February</h3>
                            <p>“Amethyst is said to be
                                associated with qualities of peace, courage and stability.”</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-40 ">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Citrine} alt="aquamarine" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Aquamarine</h2>
                            <div className="pt-6">
                                <p>Named after seawater, aquamarine’s fresh watery hue is a cool plunge into a
                                    refreshing pool.</p>
                                <p>Blue to slightly greenish-blue variety of the mineral beryl. Crystals are sometimes
                                    big enough to cut fashioned gems of more than 100 carats. Well-formed crystals might
                                    make superb mineral specimens.</p>
                            </div>
                            <h3>Birthstone - March</h3>
                            <p>“Aquamarine: a timeless symbol of youth, health and hope.”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Diamond} alt="diamond" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Diamond</h2>
                            <div className="pt-6">
                                <p>Diamonds are among nature’s most precious and beautiful creations.</p>
                                <p>This hardest gem of all is made of just one element: carbon. It’s valued for its
                                    colorless nature and purity. Most diamonds are primeval—over a billion years old—and
                                    form deep within the earth.</p>
                            </div>
                            <h3>Birthstone - April </h3>
                            <p>“Considered as a paramount of gestures, it’s a symbol of eternal and endless love.”</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-40">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Emerald} alt="emerald" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Emerald</h2>
                            <div className="pt-6">
                                <p>Emerald is the bluish green to green variety of beryl, a mineral species that
                                    includes aquamarine. </p>
                                <p>TThe most valued variety of beryl, emerald was once cherished by Spanish
                                    conquistadors, Inca kings, Moguls, and pharaohs. Today, fine gems come from Africa,
                                    South America, and Central Asia.</p>
                            </div>
                            <h3>Birthstone - May</h3>
                            <p>“Emerald, known as the gem of Venus, is considered to be a strong symbol of the bonds of
                                love and rebirth.”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Pearl} alt="pearl" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Pearl</h2>
                            <div className="pt-6">
                                <p>Perfect shining spheres. Lustrous baroque forms. Seductive strands, warm to the
                                    touch. Pearls are simply and purely organic. </p>
                                <p>Produced in the bodies of marine and freshwater mollusks naturally or cultured by
                                    people with great care. Lustrous, smooth, subtly-colored pearls are jewelry staples,
                                    especially as strands.</p>
                            </div>
                            <h3>Birthstone - June</h3>
                            <p>“Amethyst is said to be
                                associated with qualities of peace, courage and stability.”</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-40">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Ruby} alt="ruby" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Ruby</h2>
                            <div className="pt-6">
                                <p>Ruby is the most valuable variety of the corundum mineral species, which also
                                    includes sapphire.</p>
                                <p>Traces of chromium give this red variety of the mineral corundum its rich color. Long
                                    valued by humans of many cultures. In ancient Sanskrit, ruby was called ratnaraj, or
                                    “king of precious stones.”</p>
                            </div>
                            <h3>Birthstone - July</h3>
                            <p>“Ruby, the King of Gemstones, is said to represent love, courage and passion”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Peridot} alt="peridot" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Peridot</h2>
                            <div className="pt-6">
                                <p>Found in lava, meteorites, and deep in the earth’s mantle, yellow-green peridot is
                                    the extreme gem</p>
                                <p>Yellow-green gem variety of the mineral olivine. Found as nodules in volcanic rock,
                                    occasionally as crystals lining veins in mountains of Myanmar and Pakistan, and
                                    occasionally inside meteorites.</p>
                            </div>
                            <h3>Birthstone - August</h3>
                            <p>“Peridot is a happy stone. It is known to bring happiness, warmth and emotional strength
                                in the lives of the wearers.”</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-40">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Sapphire} alt="sapphire" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Sapphire</h2>
                            <div className="pt-6">
                                <p>The name “sapphire” can also apply to any corundum that’s not ruby, another corundum
                                    variety.</p>
                                <p>Depending on their trace element content, sapphire varieties of the mineral corundum
                                    might be blue, yellow, green, orange, pink, purple or even show a six-rayed star if
                                    cut as a cabochon.</p>
                            </div>
                            <h3>Birthstone - September</h3>
                            <p> “Sapphires are believed to focus the mind, encourage self-discipline and channel higher
                                powers.”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Tourmaline} alt="tourmaline" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Tourmaline</h2>
                            <div className="pt-6">
                                <p>Tourmalines have a variety of exciting colors with one of the widest color ranges of
                                    any gem. </p>
                                <p>Comes in many colors, including the remarkable intense violet-to-blue gems particular
                                    to Paraíba, Brazil, and similar blues from Africa. Favorite of mineral collectors.
                                </p>
                            </div>
                            <h3>Birthstone - October</h3>
                            <p>“Tourmaline is believed to protect one against evil forces, toxins, pollutants and all
                                negative energy.”</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-40">
                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Citrine} alt="citrine" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2> Citrine</h2>
                            <div className="pt-6">
                                <p>Citrine is the transparent, pale yellow to brownish orange variety of quartz.</p>
                                <p> Citrine’s color comes from traces of iron. It’s perhaps the most popular and
                                    frequently purchased yellow gemstone and an attractive alternative for topaz as well
                                    as for yellow sapphire.</p>
                            </div>
                            <h3>Birthstone - November</h3>
                            <p> “Part of the Quartz family, Citrine is famously known as the Healing Quartz. It helps to
                                support vitality and promote health.”</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <div>
                            <Image src={Topaz} alt="topaz" />
                            <div className="flex justify-center items-center mx-10">
                                    <a className="px-4 bg-[#192537] text-white">Polished</a>
                                    <a className="px-5">Rough</a>
                            </div>
                        </div>
                        <div>
                            <h2>Topaz</h2>
                            <div className="pt-6">
                                <p>Honey yellow. Fiery orange. Cyclamen pink. Icy blue. In warm or cool tones, topaz is
                                    a lustrous and brilliant gem..</p>
                                <p>Colorless topaz treated to blue is a mass-market gem. Fine pink-to-red, purple, or
                                    orange gems are one-of-a-kind pieces. Top sources include Ouro Prêto, Brazil, and
                                    Russia's Ural Mountains.</p>
                            </div>
                            <h3>Birthstone - December</h3>
                            <p> “Blue Topaz, being a symbol of love, is said to foster kindness and a sweet nature.”</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Birthstones