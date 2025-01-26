import hackblitzlogo from "../assets/hackblitzlogo.svg"

function Navbar(){
    const items = ["Home","About","Themes","Prizes","Sponsers","Team","FAQ","Contact Us"]
    return(
        <div className="flex py-3 border-b-2 border-opacity-50 border-white">
            <img src={hackblitzlogo} alt="hackblitz" className="ml-2"/>
            <div className="w-full flex justify-center">
                <ul className="flex justify-evenly items-center pl-12 pr-10 p rounded-3xl border-2 border-opacity-50 border-gray-400">
                    {items.map((item,index)=>(
                        <li key={index} className="mx-5 inline-block relative group text-center cursor-pointer">{item}<span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-400 scale-x-0 origin-bottom-center transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-center cursor-pointer"></span></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar