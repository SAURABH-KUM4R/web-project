import Person from './component/Person'
import './App.css'
import Button from './component/Button'
import Header from './component/Header'
import List from './component/List'

function App() {
  return (
    <>
    <Header title={"Welcome"} />
    <Person name="Saurabh" age="280"/>
    <Button text= "Button" onClick={() => console.log("Button Clicked!!")}/>
    <List items={['item-1','item-2','item-3']} />
    </>
  )
}

export default App
