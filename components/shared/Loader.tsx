import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
