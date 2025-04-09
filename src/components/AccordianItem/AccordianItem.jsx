import { useState } from "react";
import styles from "./AccordianItem.module.css";

const AccordianItem = ({
  title,
  description,
  toggleIconOpen = "+",
  toggleIconClose = "-",
}) => {
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);
  const handleToggleAccordian = () => {
    setIsAccordianOpen((prev) => !prev); // whatever it is now, it will return the oppsosite
  };

  return (
    <li className={styles.accordian}>
      <header
        className={`${styles.header} ${
          !isAccordianOpen && styles.borderRadiusBottom
        }`}
        onClick={handleToggleAccordian}
      >
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.toggleIcon}>
          {isAccordianOpen ? toggleIconClose : toggleIconOpen}
        </span>
      </header>
      <div
        className={`${styles.descriptionWrapper} ${
          isAccordianOpen ? styles.open : ""
        }`}
      >
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default AccordianItem;
