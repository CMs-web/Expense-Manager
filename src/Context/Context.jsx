import React, { createContext, useState } from "react";

 const HookDemo = createContext();

 export const Context = ({ children }) => {

  const [transactions, setTransactions] = useState([]);
  const [editAmount, setEditAmount] = useState([]);
  const [editTitle, setEditTitle] = useState([]);
  const [curTrans, setcurTrans] = useState([]);
  const [btnDone, setBtnDone] = useState(false);
  const [sort, setSort] = useState("input");
  
  const handleSubmit = (ev, title, amount) => {
    ev.preventDefault();
    
    const isCurTransPresent = transactions.filter(
      (trans) => trans.id !== curTrans.id
    );

    const newTransaction = {
      id: crypto.randomUUID(),
      text: title,
      amount: Number(amount),
    };

    setTransactions(
      transactions.length === 0
        ? [newTransaction]
        : [...isCurTransPresent, newTransaction]
    );

    setEditAmount("");
    setEditTitle("");
    setBtnDone(false);
  };

  const handleDelete = (id) => {
    setTransactions((transaction) =>
      transaction.filter((trans) => trans.id !== id)
    );
  };

  const handleEdit = (trans) => {
    setcurTrans(trans);
    setEditTitle(trans.text);
    setEditAmount(trans.amount);
    setBtnDone(true);
  };

  return (
    <HookDemo.Provider value={{ transactions , setTransactions, editAmount, editTitle, curTrans, btnDone, handleSubmit, sort, setSort }}>
      {children}
    </HookDemo.Provider>
  );
};

export default HookDemo;
