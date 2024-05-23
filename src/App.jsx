import {useState} from 'react'

import './App.css'
import Coinflip from './Coinflip'

function App() {
  
  const [needhelp, setNeedhelp] = useState(true)
  const [yes, setYes] = useState(false)
  const [justdo, setJustdo] = useState(true)
 

  const resetState = () => {
    setNeedhelp(true)
    setYes(null)
    setJustdo(true)
   
  }

  const handleYes = (answer) => {
    setNeedhelp(false)
    setYes(answer)
  }


  return (
    <>
  
    {/* STARTPAGE */}
    <button onClick={resetState} className='resetButton' style={{position: 'absolute', top: '10px', right: '10px'}}>RESET</button>
     { needhelp &&
      <div>
        {/* <img src="https://i.imgur.com/iDjVEG4.jpeg" alt="" srcset="" /> */}
        <h1>need help to decide?</h1>
          <h1> 
              <p onClick={() => handleYes(true)} style={{cursor: 'pointer'}}>yes</p>
              <p onClick={() => handleYes(false)} style={{cursor: 'pointer'}}>no</p>
          </h1>
      </div>
     }
     {/* IF NO */}
     { !needhelp && !yes && 
      <div id="imgdiv">
        <img src="https://media.tenor.com/PkfLtiAdQN0AAAAe/why-are-you-here-adam.png" alt="" srcset="" style={{maxWidth: '100%'}}/>
      </div>
     }
     {/* IF YES */}
     { !needhelp && yes && 
      <Coinflip justdo={justdo} setJustdo={setJustdo}/>
     }
     
    





    </>
  )
}

export default App
