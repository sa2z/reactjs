import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value); 
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo ==="") {
      return;
    } 
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  }
  // console.log(toDo);
  // console.log(toDos);
  return (
    <div>
      <h1>Added List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo || ""}
          type="text"
          onChange={onChange}
          placeholder="write your todo..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;