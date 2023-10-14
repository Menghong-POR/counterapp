import logo from './logo.svg';
import './App.css';
import { Decrement } from './features/Decrement.js';
import { Increment } from './features/Increment.js';
import { Reset } from './features/Reset.js'
import { CounterNumber } from './features/CounterNumber';
import { selectCountNumber } from './slices/slices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/slices';
import styles from './styles.module.css';
//import { move } from './features/Dragguble'
import { useState } from 'react';


function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startLeft, setStartLeft] = useState(0);
  const [minLeft, setMinLeft] = useState(0);
  const [maxLeft, setMaxLeft] = useState(10);
  const countNumber = useSelector(selectCountNumber);
  const dispatch = useDispatch();
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartLeft(e.target.offsetLeft);
    setMinLeft(10);
    //setMaxLeft(e.target.nextSibling.offsetWidth + 10);
    //setMaxLeft(e.currentTarget.offsetWidth - e.target.offsetWidth - 10)
    setMaxLeft(e.target.nextSibling.offsetLeft - 20)
    document.addEventListener("mouseup", () => {
      setIsDragging(false);
      e.target.style.left = '77.5px';
    })
  };

  const handleMouseMove = (e) => {
    if(isDragging) {
      const deltaX = e.clientX - startX;
      let newLeft = startLeft + deltaX;
      newLeft = Math.min(newLeft, maxLeft);
      newLeft = Math.max(newLeft, minLeft);
      
      e.target.style.left = `${newLeft}px`;
      console.log(`newLeft ${newLeft}`)
      console.log(`minLeft ${minLeft}`)
      console.log(`maxLeft ${maxLeft}`)
      console.log(`deltaX ${deltaX}`)
      console.log(`startLeft ${startLeft}`)
      console.log(`startX ${startX}`)

    }
  }

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.target.style.left = '77.5px';
  }

  const handleIncrementBtn = (e) => {
    e.preventDefault();
    if (!isDragging) {
      dispatch(increment());
    }
    
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increment());
  }

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch(decrement());
  }

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(reset());
  }

//  const mousemove = (e) => {
//    e.preventDefault();
//    if (isDragging) {
//      var deltaX = e.target.clientX - startX;
//      draggable.style.left = (draggable.offsetLeft + deltaX) + "px";
      
      //update the startX value
//      startX = e.target.clientX;
//    }
//  }

//  const mouseup = (e) => {
//    e.preventDefault();
//    isDragging = false;
//  }




  return (
    <div className="App">
      <div className="output">
        <CounterNumber count={countNumber}/>
      </div>
      <div className="plus-minus-btn" >
        <Increment onIncrement={handleIncrement} className="increment_btn"/>
        
        <button id="circle" onClick={handleIncrementBtn} 
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove} 
          //onMouseUp={handleMouseUp}
          
          ></button>
        
        <Decrement onDecrement={handleDecrement} className="decrement_btn"/>
      </div>
      <div className="reset_btn">
        <Reset onReset={handleReset}/>
      </div>
      
        
      
      
    </div>
  );
}

export default App;
