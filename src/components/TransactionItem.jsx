import React, { useState } from "react";

const TransactionItem = ({ transaction, handleDelete, handleEdit }) => {
  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item rounded-0 bg-success text-light listitem"
          : "list-group-item rounded-0 bg-danger text-light listitem"
      }
    >
      <h4>{transaction.text}</h4>
      <h2>{transaction.amount}</h2>

      <button
        className="btn btn-outline-light btn-sm rounded-0 float-end"
        onClick={() => handleDelete(transaction.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-outline-light btn-sm rounded-0 float-end"
        onClick={() => handleEdit(transaction)}
      >
        Edit
      </button>
    </li>
  );
};

export default TransactionItem;
