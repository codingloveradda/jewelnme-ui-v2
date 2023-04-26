import Image from "next/image";
import Link from "next/link";
import Ring from "../../../public/Images/Header/Ring_megamenu/Ring.png";


const Rings = () => {
    return (

        <div className=" h-[437px] bg-white ring_menu">
            <div className="p-10 mt-3 grid grid-cols-2">
                {/* <!-- Column one --> */}
                <div className="grid grid-cols-2 pr-8 rings_brief">
                    <div>
                        <Image src={Ring} alt="ring" className="Ring" />
                    </div>
                    <div>
                        <h1 className="pt-10">
                            Jewelnme Ring Collection
                        </h1>

                        <p className="pt-7">
                            Giving a jewel is always special. "Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link href={"./AllRIngs/AllRings"}>
                            <button className="pt-7">
                                View all
                                <i className="fa-solid fa-arrow-right  ml-4"></i>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* <!-- Column two --> */}
                <div className="grid grid-cols-3 px-20 rings_categories ">
                    <div className="pt-10 tabl:max-laps:pt-3">
                        <h2 className="mb-6">
                            Shop by Gender
                        </h2>
                        <ul>
                            <Link href={"../Process"}><li>for Her</li></Link>
                            <Link href={"../Process"}><li>for Him</li></Link>
                            <Link href={"../Process"}><li>Unisex</li></Link>
                        </ul>
                        <h2 className="mb-6">
                            Shop by Gemstone
                        </h2>
                        <ul>
                            <Link href={"../Process"}><li>Diamond Jewellery</li></Link>
                            <Link href={"../Process"}><li>Pearls Jewellery</li></Link>
                        </ul>
                    </div>
                    <div className="pt-10 tabl:max-laps:pt-3">
                        <h2 className="mb-6">
                            Shop by Metal
                        </h2>
                        <ul>
                            <Link href={"../Process"}><li>Yellow Gold</li></Link>
                            <Link href={"../Process"}><li>White Gold</li></Link>
                            <Link href={"../Process"}><li>Rose Gold</li></Link>
                            <Link href={"../Process"}><li>Yellow & Rose Gold</li></Link>
                            <Link href={"../Process"}><li>Yellow & White Gold</li></Link>
                            <Link href={"../Process"}><li>White & Rose Gold</li></Link>
                            <Link href={"../Process"}><li>Platinum</li></Link>
                        </ul>
                    </div>
                    <div className="pt-10 tabl:max-laps:pt-3">
                        <h2 className="mb-6">
                            Shop by Collection
                        </h2>
                        <ul>
                            <Link href={"../Process"}><li>Engagement Rings</li></Link>
                            <Link href={"../Process"}><li>Minimal Rings</li></Link>
                            <Link href={"../Process"}><li>Office Wear Rings</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rings;