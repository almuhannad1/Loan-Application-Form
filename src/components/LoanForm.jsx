import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    const { age, phoneNumber } = formInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age is not allowed !!");
    } else if (phoneNumber.length < 8 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is Incorrect !!");
    } else {
      setErrorMessage(null);
    }

    setShowModal(true);
  }

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  let btnIsDisabled =
    formInputs.name === "" ||
    formInputs.age === "" ||
    formInputs.phoneNumber === "";

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form
        onSubmit={handleFormSubmit}
        className="flex"
        id="loan-form"
        style={{ flexDirection: "column" }}
      >
        <h2>Requesting a Loan</h2>
        <hr />

        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          value={formInputs.name}
          onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }
        />

        {/* Phone Number */}
        <label>Phone Number:</label>
        <input
          type="number"
          value={formInputs.phoneNumber}
          onChange={(e) =>
            setFormInputs({ ...formInputs, phoneNumber: e.target.value })
          }
        />

        {/* Age */}
        <label>Age:</label>
        <input
          type="number"
          value={formInputs.age}
          onChange={(e) =>
            setFormInputs({ ...formInputs, age: e.target.value })
          }
        />

        {/* Employee */}
        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={formInputs.isEmployee}
          onChange={(e) =>
            setFormInputs({ ...formInputs, isEmployee: e.target.checked })
          }
        />

        {/* Salary Range */}
        <label>Salary</label>
        <select
          value={formInputs.salaryRange}
          onChange={(e) =>
            setFormInputs({ ...formInputs, salaryRange: e.target.value })
          }
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        {/* Button */}
        <button
          className={btnIsDisabled ? "disabled" : ""}
          id="submit-loan-btn"
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>

      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}

export default LoanForm;
