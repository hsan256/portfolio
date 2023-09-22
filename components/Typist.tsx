"use client";

import Typewriter from "typewriter-effect";

interface TypistProps {
  words: string[];
}

const Typist: React.FC<TypistProps> = ({ words }) => {
  return (
    <>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default Typist;
