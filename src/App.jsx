
import './App.css'

function App() {

  function handleClick(){
    alert('btn click')
  }
  const handleClicks=()=>{
    alert('btn 2 clicked')
  }


  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Me</button>
      <hr />
      <button onClick={handleClicks}>Click me 2</button>
      <hr />
      <button onClick={()=>{alert('third Clicked')}}>third</button>
      <hr />
      <button onClick={() =>addToFive(6)}>addToFive</button>
    </>
  )
}

export default App
