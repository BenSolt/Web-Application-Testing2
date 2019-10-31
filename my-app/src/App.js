import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

const addstrike = currentStrike =>{
  return currentStrike +1;
}

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

const strikeTaken = () => setStrikes(strikes + 1) 
if (strikes === 3) { setStrikes(0); setBalls(0);
}

const ballTaken = () => setBalls(balls + 1)
if (balls === 4) { setBalls(0); setStrikes(0);

}

const foulTaken = () => {
  setStrikes(strikes + 2)
//With no strikes, a foul makes it 1 strike. 
// if (addstrike === 0) {setStrikes(strikes + 1)} 
//With 1 strike, a foul makes it 2 strikes.
if (strikes === 1) {setStrikes(strikes + 1)} 
// With 2 strikes a foul has no effect, count = 2 strikes.
if (strikes === 2) {setStrikes(strikes + 0)}      
}

const hitTaken = () => {setStrikes(0); setBalls(0);}

  return (
    <div className="App">
      <div className="Top"> 
        <Display
              
          displayBalls={balls}
          displayStrikes={strikes}
        />
      </div>
      <div className="Top"> 
        <Dashboard
          dashboardstrike={strikeTaken}
          dashboardballs={ballTaken}
          dashboardfoul={foulTaken}
          dashboardhit={hitTaken}
        />
      </div>
    </div> 
  );
}

export default App;
