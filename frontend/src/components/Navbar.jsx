import hackblitzlogo from "../assets/hackblitzlogo.svg"

function Navbar(){
    const items = ["Home","About","Themes","Prizes","Sponsers","Team","FAQ","Contact Us"]
    return(
        <div className="flex py-3 border-b-2 border-opacity-50 border-white">
            <img src={hackblitzlogo} alt="hackblitz" className="ml-2"/>
            <div className="w-full flex justify-center">
                <ul className="flex justify-evenly items-center pl-12 pr-10 p rounded-3xl border-2 border-opacity-50 border-gray-400">
                    {items.map((item,index)=>(
                        <li key={index} className="mx-5">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar