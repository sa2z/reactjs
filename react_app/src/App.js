import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function hiFn(){
    console.log("created :)");
    return byeFn;
  }
  function byeFn(){
    console.log("bye :(")
  }

  useEffect(hiFn,[]);
  return <h1> Hello </h1>;

  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => console.log("bye :(")
  // },[]);

  // useEffect(function () {
  //   console.log("hi :)");
  //   return function() {
  //     console.log("bye :(")
  //   }
  // },[])
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickHide = () => setShowing((prev) => !prev);

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
      {showing ? <Hello /> : null}
      <button onClick={onClickHide}>{showing ? "Hide":"Show"}</button>
    </div>
  );
}

export default App;
