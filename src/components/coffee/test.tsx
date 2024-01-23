import React from "react";

const TestComponent: React.FC = () => {
  return (
    <div className="grid grid-rows-3 h-screen">
      <div className="h-100 bg-gray-200">Top Row</div>
      <div className="flex-grow bg-gray-400">Middle Row</div>
      <div className="h-100 bg-gray-200">Bottom Row</div>
    </div>
  );
};

export default TestComponent;
