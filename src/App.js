import { useEffect } from "react";
import axios from "axios";
function App() {

  const word="word"
  useEffect(()=>{
    axios.get("http://localhost:4027/api/todo",{
      params:{word}
    })
    // fetch('http://localhost:4027/api/todo')
    // .then((response)=>response.json())
    // .then(data=>console.log(data))

  },[])
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
    </div>
  );
}

export default App;
