import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import BasicSlider from './components/Slider/Slider.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Header />
        <BasicSlider />
      </div>
    );
}

export default App
