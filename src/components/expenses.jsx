import React from "react";
import headerStyles from "./Header.module.css";

const Expenses = () => {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.title}>Expenses</div>
    </header>
  );
};

export default Expenses;
