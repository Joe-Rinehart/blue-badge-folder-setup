import './App.css';
import ClickCounter from './components/Day02-challenge/ClickCounter/ClickCounter';
import PresidentParent from './components/Day02-challenge/Presidents/PresidentParent';
import ParentComponent from './components/Day02-challenge/Votes/ParentComponent';

function App() {
const welcomeName = "Joe"

const phrase = "I wasn't alive then"

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <ParentComponent phrase = {phrase}/>
      <PresidentParent/> */}
      <ClickCounter/>
    </div>
  );
}

export default App;