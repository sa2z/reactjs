import { useEffect, useState } from "react";

function App() {
  // Todo List //
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

  // Object Tracker //
  const [loading, setLoading] = useState(true);
  
  const [coins, setCoins] = useState([]);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    // fetch("https:api.coinpaprika.com/v1/tickers")
    //   .then(response => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       setCoins(json);
    //       setLoading(false);
    //     });
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
        .then((json) => {
          console.log(json);
          setCoffees(json);
          setLoading(false);
          }
        );
  },[])
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
      <div>
        <h1>The Coffees ({coffees.length})</h1>
        {loading ? <strong>Loading... </strong>:null}
        <ul>
          {coffees.map((coffee) => 
            <li>
              <h1>{coffee.title}</h1> 
              <h4>{coffee.description}</h4>
              <h5>{coffee.image}</h5>
              <img src={coffee.image} width="100" height="132"></img>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
        <strong>Loading...</strong>
        ) : (
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))};
          </select>
        )}
        
      </div>
    </div>
    
  );
}

export default App;