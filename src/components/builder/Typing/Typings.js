import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Typings = ({ count, selectedEnvironment, className }) => {
  const [typeWriter, setTypeWriter] = useState(undefined);
  useEffect(() => {
    typeWriter?.deleteAll().typeString(selectedEnvironment).start();
  }, [selectedEnvironment]);

  return (
    <>
      {selectedEnvironment && count && (
        <Typewriter
          className={className}
          onInit={(typewriter) => {
            typewriter.typeString(selectedEnvironment).start();
            setTypeWriter(typewriter);
          }}
        />
      )}
    </>
  );
};

export default Typings;
