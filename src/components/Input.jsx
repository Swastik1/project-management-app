import React from "react";

const Input = ({ textarea, label, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      {label}
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
};

export default Input;
