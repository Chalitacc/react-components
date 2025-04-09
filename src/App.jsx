import styles from "./App.module.css";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={styles.rootContainer}>
      <Input
        placeHolder="Enter Firstname"
        label="First Name:"
        errorMessage="firstname is required!"
      ></Input>
    </div>
  );
}

export default App;
