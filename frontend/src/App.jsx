import React from 'react';

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white text-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 opacity-25 rounded-full blur-3xl top-16 left-16 animate-slow-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-600 opacity-25 rounded-full blur-3xl bottom-16 right-16 animate-slow-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500 opacity-30 rounded-full blur-3xl top-1/2 left-1/4 transform -translate-y-1/2 animate-slow-pulse"></div>
      </div>

      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 relative z-10 tracking-wide drop-shadow-md">
        🚀 HackBlitz
      </h1>

      {/* Event Dates */}
      <div className="relative z-10 text-2xl md:text-4xl bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg animate-glow">
        📅 26-27 April
      </div>

      {/* Coming Soon Message */}
      <p className="text-xl md:text-2xl mt-8 relative z-10 text-gray-300 font-medium animate-fade-in">
        Website Coming Soon...
      </p>

      {/* Stay Tuned */}
      <p className="text-lg md:text-xl mt-2 relative z-10 text-gray-400 font-light">
        Stay tuned for something amazing!
      </p>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
}

export default App;
