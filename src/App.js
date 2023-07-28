import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Convert from './components/Convert';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className='icon' icon={faArrowRightArrowLeft} color='black'/>
        <label id='title'>unit converter</label>
      </header>
      <Convert/>
    </div>
  );
}

export default App;
