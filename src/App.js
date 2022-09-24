import './App.css';
import CountDown from './CountDown';
import { FaArrowDown } from 'react-icons/fa';
import {useState} from 'react';
import NextLaunches from './NextLaunches';

function App() {
  const [isShown, setIsShown] = useState(false);
  const handlerClick = e =>{
    setIsShown(current => !current)
    setIsShown(true);
  }
  return (
    <div className="App">
      <CountDown/>
      <footer>
      <FaArrowDown onClick = {handlerClick} className='iconResizecd'/>
      {
        isShown && <NextLaunches/>
      }
      </footer>
    </div>
  );
}

export default App;
