import React from 'react';

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white text-center overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 relative z-10">🚀 HackBlitz</h1>
      <p className="text-xl md:text-2xl mb-6 relative z-10">Website Coming Soon...</p>
      <p className="text-gray-400 relative z-10">Stay tuned for something amazing!</p>

      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
}

export default App;
