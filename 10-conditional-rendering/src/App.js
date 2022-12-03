import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return <div className="App">
    <PetInfo animal="dog" age={4} hasPet haveFeed = {false}/>
    <PetInfo animal="cat" age={7} hasPet = {false} haveFeed/>
  </div>
  
}

export default App;
