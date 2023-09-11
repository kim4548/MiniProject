import { useEffect } from "react";



function App() {
  const [count ,setCount ]  = useState(0);

  const clickHandle=()=>{
setCount(count +1)
  }

  useEffect(()=>{
console.log("처음 렌더링 ");

  },[])


  return (
    <div className="App">
        <p>{count}</p>
      <button onClick={clickHandle}>Update</button>
    </div>
  );
}

export default App;
