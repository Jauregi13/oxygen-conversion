import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Convert from './components/Convert';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-content'>
          <FontAwesomeIcon className='icon' icon={faArrowRightArrowLeft} color='black'/>
          <label id='title'>unit converter</label>
        </div>
        
      </header>
      <Convert/>
    </div>
  );
}

export default App;
