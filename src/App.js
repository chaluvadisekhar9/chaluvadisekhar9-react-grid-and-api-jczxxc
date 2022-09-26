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
  const startDate = new Date("Sep 28, 2022 15:37:25").getTime();
  return (
    <div className="App">
      <CountDown startDate = {startDate}/>
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
