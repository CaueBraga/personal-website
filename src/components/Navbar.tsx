import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className="flex gap-10 justify-around md:justify-end mt-6 mb-7 text-base md:text-xl hover:text-base-purple text-base-gray font-normal">
      <div className={styles.borderButton}>Projects</div>
      <div className={styles.borderButton}>Contact</div>
    </div>
  );
}
