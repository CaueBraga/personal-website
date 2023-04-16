import * as React from "react";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { ArrowFatLinesUp } from "@phosphor-icons/react";

export function Contact() {
  function moveToTop() {
    window.scrollTo({ top: 20, behavior: "smooth" });
  }
  return (
    <div
      className="flex text-base-gray flex-col items-center mt-24 mb-8 md:mb-24"
      id="contact"
    >
      <div className="text-3xl font-medium">Contact me!</div>
      <div className="mt-6 border-b-8 border-base-purple w-16 md:mb-4" />
      <div
        className="flex md:justify-center flex-col items-center md:flex-row text-contact-links
      text-xl font-base mr-4 mt-20 md:mt-24 md:mb-4 font-mulish"
      >
        <a
          rel="noopener noreferrer"
          href={data.info.email_link}
          target="_blank"
          className={styles.borderButton}
        >
          {data.info.email}
        </a>
        <FontAwesomeIcon
          className="mt-1 mx-10 text-contact-bar hidden md:block font-thin"
          icon={faGripLinesVertical}
        />
        <a
          rel="noopener noreferrer"
          href={data.info.linkedin_link}
          target="_blank"
          className={styles.borderButton}
        >
          LinkedIn
        </a>
        <FontAwesomeIcon
          className="mt-1 mx-10 text-contact-bar hidden md:block"
          icon={faGripLinesVertical}
        />
        <a
          rel="noopener noreferrer"
          href={data.info.git_link}
          target="_blank"
          className={styles.borderButton}
        >
          github
        </a>
      </div>

      <button onClick={moveToTop}>
        <ArrowFatLinesUp
          className="mt-8 hover:opacity-60 hover:pb-1"
          size={40}
          color="#8e97e6"
          weight="fill"
        />
      </button>
    </div>
  );
}
