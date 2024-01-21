import React from "react";

const firstpage = () => {
  return (
    <section className="md:py-20 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center font-bold md:px-20 pb-10
       text-gradient bg-gradient-to-r from-blue-500 to-green-300
       bg-clip-text text-transparent"
        >
          {" "}
          Build Your Brand with Us.
        </div>
        <p
          className="text-lg md:text-xl md-10
        bg-gradient-to-t
        from-red-500
        to-red-300
        bg-clip-text
        text-transparent
        font-bold"
        >
          Love the Brand.
        </p>
      </div>
    </section>
  );
};

export default firstpage;
