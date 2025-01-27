import { useState } from "react"
import hackblitzlogo from "../assets/hackblitzlogo.svg"
import { FaAlignJustify } from "react-icons/fa"

function Navbar() {
    const items = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Themes", id: "theme" },
        { name: "Prizes", id: "prizes" },
        { name: "Sponsors", id: "sponsors" },
        { name: "Team", id: "team" },
        { name: "FAQ", id: "faq" },
        { name: "Contact Us", id: "contact" },
    ];

    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <>
            <div className="flex py-3 border-b-2 border-opacity-50 border-white max-lg:justify-between">
                <img src={hackblitzlogo} alt="hackblitz" className="ml-2" />
                <button
                    onClick={() => setNavBarOpen(!navBarOpen)}
                    className="mr-4 lg:hidden"
                >
                    <FaAlignJustify className="text-2xl" />
                </button>
                <div className="w-full flex justify-center max-lg:hidden">
                    <ul className="flex justify-evenly items-center pl-12 pr-10 p rounded-3xl border-2 border-opacity-50 border-gray-400">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="mx-5 inline-block relative group text-center cursor-pointer"
                            >
                                <a href={`#${item.id}`} className="hover:underline">
                                    {item.name}
                                </a>
                                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-400 scale-x-0 origin-bottom-center transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-center cursor-pointer"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <ul
                className={`bg-black text-white border-t-2 lg:hidden ${
                    navBarOpen ? "block" : "hidden"
                }`}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="py-4 text-center border-b-2 border-opacity-50 border-gray-400"
                    >
                        <a href={`#${item.id}`} className="hover:underline">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Navbar;