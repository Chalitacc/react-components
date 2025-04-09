import styles from "./App.module.css";
import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/AccordianItem/AccordianItem";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={styles.rootContainer}>
      {/* <Input
        placeHolder="Enter Firstname"
        label="First Name:"
        errorMessage="firstname is required!"
      ></Input> */}
      <Accordian></Accordian>
    </div>
  );
}

export default App;
