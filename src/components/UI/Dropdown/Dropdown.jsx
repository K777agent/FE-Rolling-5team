import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.trigger} onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && <div className={styles.menu}>{children}</div>}
    </div>
  );
};

export default Dropdown;
