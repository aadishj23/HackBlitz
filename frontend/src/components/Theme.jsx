import React from 'react';
import AIImage from "../assets/Cards/AI.png";
import CloudImage from "../assets/Cards/cloud.png";
import EdTechImage from "../assets/Cards/EdTech.png";
import FinTechImage from "../assets/Cards/Fintech.png";
import HealthTechImage from "../assets/Cards/HealthTech.png";
import StudentInnovationImage from "../assets/Cards/Student innovation.png";
import VRImage from "../assets/Cards/VR.png";
import Web3Image from "../assets/Cards/Web3.png";

function Theme() {
  const cards = [
    { id: 1, img: AIImage,  text: "AI" },
    { id: 2, img: CloudImage, text: "Cloud" },
    { id: 3, img: EdTechImage, text: "EdTech" },
    { id: 4, img: FinTechImage, text: "FinTech" },
    { id: 5, img: HealthTechImage, text: "HealthTech" },
    { id: 6, img: StudentInnovationImage, text: "Student Innovation" },
    { id: 7, img: VRImage, text: "VR" },
    { id: 8, img: Web3Image, text: "Web3" },
  ];

  return (
    <section className="p-10">
      <h1 className="text-white text-center text-2xl max-w-2xl mx-auto mb-6 p-4">
        THEMES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden group max-w-xs mx-auto"
          >
           
            <img
              src={card.img}
              alt={card.text}
              className="w-full h-40 object-cover transition-transform transform group-hover:scale-110 duration-300"
            />
           
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-purple-700 font-bold text-xl">
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Theme;
