import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Expenses from "./components/expenses";
import ExpenseForm from "./components/expenseforms";

const App = () => {
  return (
    <div>
      <header>
        <h1>
          <Expenses />
        </h1>
      </header>
      <p>
        <ExpenseForm />
      </p>
      <p>Hello</p>
    </div>
  );
};

export default App;
