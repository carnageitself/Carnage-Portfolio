import React from "react";
import BallCanvas from "./ui/Balls";
import { Glowing } from "./Glowing";
import { ColourfulText } from "./ui/ColorfulText";

export const Techstack = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        <ColourfulText text="My Tech Stack" />
      </h1>
      <div className="mt-20">
        <Glowing />
      </div>
    </div>
  );
};
