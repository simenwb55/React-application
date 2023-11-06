import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuerry from "../Hooks/useMedieQuery";

const link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.tolowerCase();
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-yewllow" : ""}
         hover:text-yellow transition duration-500`}
         href={`#${lowerCasePage}`}
         onClick={() => setSelectedPage(lowerCasePage)}
         >
            {page}
         </AnchorLink>
    )

}

const Navbar =({ selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsmenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuerry("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playFair text-3xl font-bold">Simen Byremo</h4>

            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />

                </div>
            ): (<div></div>)}
        </div>
        </nav>
    );
};

export default Navbar;
