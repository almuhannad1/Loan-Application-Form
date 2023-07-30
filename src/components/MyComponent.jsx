import "./FormStyles.css";
import { LoanInputContext } from "../contexts/LoanFormInputContext";
import { useContext } from "react";

function MyComponent() {
  // To use the Context. 
  const inputContext = useContext(LoanInputContext);

  return (
    <>
      <label>{inputContext.inputTitle} :</label>
      <input
        type={inputContext.typeOfInput}
        value={inputContext.compValue}
        onChange={(e) => inputContext.handleChange(e.target.value)}
      />
    </>
  );
}

export default MyComponent;
