import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import TransactionsList from "./components/TransactionsList";
import HookDemo, { Context } from "./Context/Context";

const App = () => {
  const { transactions, setTransactions, sort, setSort } = useContext(HookDemo);

  /// Functions
  return (
    <>
      <Navbar />
      <span className="float-end mt-2">
        <label htmlFor="sort">Sort:</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="mx-3"
        >
          <option value="input">Sort by input</option>
          <option value="income">Sort by income</option>
          <option value="Expenses">Sort by Expenses</option>
        </select>
      </span>
      <div className="container p-5">
        <Form />
        <Dashboard />
        {transactions.length === 0 ? (
          <h2 className="text-center mt-5">No Transatctions yet 🙄</h2>
        ) : (
          <TransactionsList />
        )}
        {transactions.length !== 0 && (
          <button className="float-end" onClick={() => setTransactions([])}>
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default App;
