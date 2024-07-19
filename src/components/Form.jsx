import React, { useContext, useEffect, useState } from "react";
import HookDemo from "../Context/Context";

const Form = () => {

 const { handleSubmit, editAmount, editTitle, btnDone } = useContext(HookDemo)

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
     console.log(editTitle);
    setTitle(editTitle);
    setAmount(editAmount);
  }, [handleSubmit]);
 
  return (
    <div className="card p-3 rounded-0 shadow-sm">
      <h3 className="text-center text-secondary">Record Your Transaction</h3>
      <form
        onSubmit={(ev)=>handleSubmit(ev, title, amount)}
      >
        <input
          type="text"
          placeholder="Enter Title"
          className="form-control my-2 rounded-0"
          required
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2 rounded-0"
          required
          value={amount}
          onChange={(ev) => setAmount(ev.target.value)}
        />
        <button className="btn btn-success w-100 rounded-0">
          {btnDone ? "Done ✅" : "Save Transaction"}
        </button>
      </form>
    </div>
  );
};

export default Form;
