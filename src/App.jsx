import styles from "./App.module.css";
import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/AccordianItem/AccordianItem";
import Counter from "./components/Counter/Counter";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className={styles.rootContainer}>
      {/* <Input
        placeHolder="Enter Firstname"
        label="First Name:"
        errorMessage="firstname is required!"
      ></Input> */}
      {/* <Accordian></Accordian> */}
      {/* <Spinner></Spinner> */}
      <ErrorMessage
        message="failed to fetch the data"
        errorLogo="❌"
      ></ErrorMessage>
    </div>
  );
}

export default App;
