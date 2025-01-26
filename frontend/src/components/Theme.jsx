import React from 'react';

function Theme() {
  const cards = [
    { id: 1, img: "/src/assets/Cards/AI.png", text: "AI" },
    { id: 2, img: "/src/assets/Cards/cloud.png", text: "Cloud" },
    { id: 3, img: "/src/assets/Cards/EdTech.png", text: "EdTech" },
    { id: 4, img: "/src/assets/Cards/Fintech.png", text: "FinTech" },
    { id: 5, img: "/src/assets/Cards/HealthTech.png", text: "HealthTech" },
    { id: 6, img: "/src/assets/Cards/Student innovation.png", text: "Student Innovation" },
    { id: 7, img: "/src/assets/Cards/VR.png", text: "VR" },
    { id: 8, img: "/src/assets/Cards/Web3.png", text: "Web3" },
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
