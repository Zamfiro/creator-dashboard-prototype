import React from "react";

function Bubble({ tag, value }) {
  return (
    <div className="bg-secondary font-bold p-3 rounded-md">
      {tag}
      <p className="text-center text-accent text-2xl sm:text-3xl p-2">{value}</p>
    </div>
  );
}

export default Bubble;
