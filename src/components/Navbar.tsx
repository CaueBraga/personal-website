import styles from "./Navbar.module.css";

import * as React from "react";
export function Navbar() {
  function moveToProjects() {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }
  function moveToContact() {
    window.scrollTo({ top: 3800, behavior: "smooth" });
  }

  return (
    <div className="flex  gap-10 justify-around md:justify-end mt-6 mb-7 text-base md:text-2xl hover:text-base-purple text-base-gray font-normal">
      <button onClick={moveToProjects} className={styles.borderButton}>
        Projects
      </button>
      <button onClick={moveToContact} className={styles.borderButton}>
        Contact
      </button>
    </div>
  );
}
