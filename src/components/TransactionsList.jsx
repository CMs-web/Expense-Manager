import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import HookDemo from "../Context/Context";

const TransactionsList = () => {

  const {sort, transactions, handleDelete, handleEdit } = useContext(HookDemo)

  let sortedTrans;

  if(sort=='input') sortedTrans = transactions
  if(sort=='Expenses') sortedTrans = transactions.sort((a,b)=> a.amount - b.amount)
  if(sort=='income') sortedTrans = transactions.sort((a,b)=> b.amount -  a.amount)
  return (
    <div>
      <h1 className="text-secondary">Transactions : </h1>
      <ul className="my-3 list-group">
        {sortedTrans.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} handleDelete={handleDelete} handleEdit={handleEdit}   />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
