import React, {useState} from 'react'

function About(){
    const [showMore,setShowMore] = useState(false)
    const [more,setMore] = useState("More")
    return(
        <div className="mt-16">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-6xl font-bold mb-10 max-lg:text-center max-lg:text-3xl">ABOUT HACKBLITZ</h2>
                <div className="border-2 border-gray-300 mt-8 text-justify rounded-2xl p-10 mx-48 text-xl font-thin max-lg:mx-8">
                    <p>
                        HackBlitz is an exciting 24-hour hackathon designed to bring together tech enthusiasts, developers, and innovators to create cutting-edge solutions to real-world problems. Participants collaborate in teams to brainstorm, code, and prototype innovative projects within a high-energy, time-bound environment.<span className={`lg:hidden blur-lg ${showMore ? "hidden" : "inline"}`}>he event encourages creativity, problem-solving, and learning through hands-on experience, workshops, and mentorship from industry experts.HackBlitz typically concludes </span><span className={`lg:inline ${showMore ? "inline": "hidden"}`}>The event encourages creativity, problem-solving, and learning through hands-on experience, workshops, and mentorship from industry experts. HackBlitz typically concludes with project demonstrations, where teams showcase their ideas to a panel of judges for prizes and recognition. Whether you're a beginner or an experienced coder, HackBlitz provides the perfect platform to test your skills, network, and build impactful solutions.</span>
                    </p>
                    <div>
                        <button onClick={()=>{
                            setShowMore(!showMore)
                            setMore(showMore ? "More" : "Less")
                        }} className='mt-6 lg:hidden'>View {more}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About