import React from 'react';

function SponsorsSection() {
  return (
    <div className="bg-black text-white flex flex-col items-center py-8 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">SPONSORS</h1>

      {['X_PARTNER', 'Y_PARTNER', 'Z_PARTNER'].map((partner, index) => (
        <div key={index} className="w-full md:w-8/12 mb-8">
          <p className="text-center text-lg mb-4">{partner}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
            {Array(3).fill().map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-md p-4 h-28 flex items-center justify-center"
              >
                XYZ
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full md:w-8/12 flex justify-center md:justify-end mt-8">
        <a
          href="https://forms.gle/s7p5aKpjJ8F1Ym2K8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
            Call for Sponsors
          </button>
        </a>
      </div>
    </div>
  );
}

export default SponsorsSection;