import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once.")
  // }
  // useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
    console.log("I run only once.")
  },[])
  useEffect(()=> {
    if (keyword !== "" && keyword.length >5 ) {
      console.log("I run when 'keyword' changes. :", keyword);
    }
  },[keyword])
  useEffect(()=> {
    if (counter !== 0 ) {
      console.log("I run when 'counter' changes. :", counter);
    }
  },[counter])
  return (
    <div>
      <h1 className={styles.title}>Welcom back!</h1>
      <Button text={"Continue"} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search keyword"
      />
    </div>
  );
}

export default App;
