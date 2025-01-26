import anveshanlogo from '../assets/anveshanlogo.svg'
import hackblitzbanner from '../assets/hackblitzbanner.svg'
import devfolio from '../assets/devfolio.svg'
import discord from '../assets/github.svg'

function Hero(){
    return(
        <div className='py-20'>
            <div className='flex justify-center items-center flex-col'>
                <img src={anveshanlogo} alt="anveshanlogo" />
                <p className='mt-3 text-lg'>Presents</p>
                <img src={hackblitzbanner} alt="hackblitz" className='-mt-4'/>
                <span className='flex -mt-8 text-2xl'><p className='mr-2 text-yellow-600'>8th-9th </p>April</span>
                <div className='flex justify-evenly items-center mt-20'>
                    <a href="#" className='flex items-center mr-28 bg-[#3770FF] p-3 rounded-3xl hover:scale-105 transition-transform duration-200'>
                        <img src={devfolio} alt="devfolio" className='mr-2'/>
                        Apply with Devfolio
                    </a>
                    <a href="#" className='flex items-center border-2 rounded-full py-1 px-4 hover:scale-105 transition-transform duration-200'>
                        <img src={discord} alt="discord" className='mr-3'/>
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero