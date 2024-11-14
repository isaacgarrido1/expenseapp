import React from "react";
import bodyStyles from "./Expensesbody.module.css";

const ExpenseForm = () => {
  return (
    <body style={{ display: "flex", gap: "10px" }}>
      <div className={bodyStyles.bodytitle}>Expense Form</div>
      <input type="text" placeholder="Description" style={{ flex: 1 }} />
      <input type="text" placeholder="Amount" style={{ flex: 1 }} />
    </body>
  );
};

export default ExpenseForm;
