
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

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
      <Users></Users>

      <Friends></Friends>


      <Counter></Counter>

      <Team></Team>



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
