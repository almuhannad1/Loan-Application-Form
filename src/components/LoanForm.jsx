import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "../contexts/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LoanForm() {
  const userData = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const initialName = userData.name
  const [formInputs, setFormInputs] = useState({
    name: initialName,
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

  //Functions Handle Inputs.
  function handleNameInputChange(value) {
    setFormInputs({ ...formInputs, name: value });
  }

  function handlePhoneNumberInputChange(value) {
    setFormInputs({ ...formInputs, phoneNumber: value });
  }

  function handleAgeInputChange(value) {
    setFormInputs({ ...formInputs, age: value });
  }
  // Functions Handle Inputs //.

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <h1 style={{ color: "white" }}>
        {userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex"
        id="loan-form"
        style={{ flexDirection: "column" }}
      >
        <h2>Requesting a Loan</h2>
        <hr />

        {/* Name */}
        <LoanInputContext.Provider
          value={{
            inputTitle: "Name",
            typeOfInput: "text",
            handleChange: handleNameInputChange,
            compValue: formInputs.name,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* Phone Number */}
        <LoanInputContext.Provider
          value={{
            inputTitle: "Phone Number",
            typeOfInput: "number",
            handleChange: handlePhoneNumberInputChange,
            compValue: formInputs.phoneNumber,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* Age */}
        <LoanInputContext.Provider
          value={{
            inputTitle: "Age",
            typeOfInput: "number",
            handleChange: handleAgeInputChange,
            compValue: formInputs.age,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

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
