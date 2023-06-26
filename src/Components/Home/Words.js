import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Words = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Telephones With Missing Person Details.", "Every 3 Hours One Of Us"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      i % 2 === 0 ? { fontSize: "1em", color: "magenta" } : { fontSize: "1em", color: "beige" }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
      <br />
      <ReactTypingEffect
        text={["Missing Person Details With No Follow Up.", "Does Not Make It."]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      i % 2 === 0 ? { fontSize: "1em", color: "magenta" } : { fontSize: "1em", color: "beige" }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />

      <br />
      <ReactTypingEffect text={["A Poem By Koleka Putuma"]} />
      <br />
      <br />
    </>
  );
};

export default Words;
