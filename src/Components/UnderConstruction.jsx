import React from "react";
import { Construction, Wrench, Clock } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-300">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Construction className="w-16 h-16 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Page Under Construction
        </h1>
        <p className="text-lg mb-6">
          We are currently working hard to bring this page to life. Stay tuned!
        </p>

        <div className="flex items-center justify-center space-x-4">
          <Wrench className="w-6 h-6 text-blue-400 animate-spin" />
          <Clock className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 px-6 py-3 text-lg bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
