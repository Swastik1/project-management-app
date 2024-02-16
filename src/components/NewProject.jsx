import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onSave }) => {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      // show the error modal
      modal.current.open();
      return;
    }

    // validation
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>You forgot to enter a value!</p>
        <p>Please enter a value for every input field!</p>
      </Modal>
      <div className="w-[35rem] mt-12">
        <menu className="flex items-center justify-end gap-6 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
