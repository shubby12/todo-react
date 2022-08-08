import './App.css';
import {useState} from "react";
import List from './List';

function App() {

  const [currentItem, setCurrentItem] = useState(null);
  const [prevItem, updatePrevItem] = useState([]);
  const onChangeDo = (e) => {
    console.log("Current value", e.target.value);
    setCurrentItem(e.target.value)
  };
  const addItem =(e) => {
    updatePrevItem([...prevItem, {item: currentItem, key: Date.now()}]);
    console.log("List item", prevItem);
    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className='holder'>
          <div className='input-holder'>
            <input placeholder='Add Item' value={currentItem} onChange={onChangeDo}/>
            <button onClick={addItem}>+</button>
          </div>
          <List prevItem = {prevItem} updatePrevItem={updatePrevItem}/>
        </div>
      </header>
    </div>
  );
}

export default App;
