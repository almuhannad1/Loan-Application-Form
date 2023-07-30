import "./App.css";
import LoanForm from "./components/LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "almuhannad01",
        name: "almuhannad",
        email: "almuhannad@gmail.com",
      }}
    >
      <div className="App" style={{ marginTop: "150px" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
