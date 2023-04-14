import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
export function Hero() {
  const fullName: string = "Cauê Braga";
  const description: string =
    "I am a frontend developer from Brasília, Brazil, focusing mainly on React and its surroundings technologies.";
  const [myName, setMyName] = useState("");

  useEffect(() => {
    writeName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function writeName() {
    setTimeout(function () {
      for (let i = 0; i <= fullName.length; i++) {
        timeoutToWrite(i);
      }
    }, 1333);
  }

  function timeoutToWrite(i: number) {
    setTimeout(function () {
      setMyName(fullName.substr(0, i));
    }, i * 69);
  }

  return (
    <div className="flex flex-col mt-16 md:mt-24 mb-4 md:mb-16">
      <div className="flex text-hero-title mt-4">
        <div className="flex text-4.5xl md:text-5xl lg:text-6xl text-base-purple font-monaco">
          <div className="  mr-4 md:mr-6 lg:mr-10 font-mulish">{">"}</div>
          {myName}
        </div>
        <div className={styles.hero} />
      </div>
      <div className="text-xl md:text-2xl text-hero-text font-light mt-10 md:mt-16 leading-loose">
        {description}
      </div>
    </div>
  );
}
