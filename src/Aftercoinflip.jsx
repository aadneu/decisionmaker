import React, { useEffect } from 'react'
import {useState} from  'react'

const Aftercoinflip = () => {


    const [time, setTime] = useState(new Date())
    
    // const handleLocalstate = () => {
        //     setLocalState(prevState => !prevState)
        // }
        
        const [problem, setProblem] = useState('')
        const [problems, setProblems] = useState([])
        const [decision, setDecision] = useState(false)
        const [chosen, setChosen] = useState('')
        const [showAddMsg, setShowAddMsg] = useState(false)
        const [showError,setShowError]=useState('')
        
        const handleEnter = (e) => {
            if (e.key === 'Enter' && problem !== ''){
                setProblems([...problems, problem])
                setProblem('')
                setShowAddMsg(true)
            }
        }
        
        const decideButton = () => {
            if(problems.length < 2) {
                setShowError('need atleast 2 decisions to proceed')
            } else if (problems.length )
            if (problems.length > 1){
                let rand = Math.floor(Math.random() * problems.length)
                let selectedProblem = problems[rand]
                setChosen(selectedProblem);
                setDecision(true)
            }
        }
        
        
        useEffect(()=> {
            setInterval(()=>setTime(new Date()), 1000)
        },[])

    return (

    <div>
        {/* <h1>{time.toLocaleTimeString()}</h1> */}
        { !decision && 
            <>
                <div>
                    <h1>speak</h1>
                    <img style={{maxWidth: '50%'}} src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg" alt="" srcset="" />
                    <h5>what decisions do you need help with?</h5>
                </div>
                <input 
                onKeyDown={handleEnter}
                onChange={(e) => setProblem(e.target.value)} 
                value={problem}
                style={{width: '300px', height: '30px', padding: '0 5px'}} type="text" name="" id="" />
                

                { showAddMsg && <h5>added {problems.length}  </h5>}
                 <h5 style={{color: 'red'}}>{showError}</h5>
                
                <div>
                    <button onClick={decideButton} style={{marginTop: '50px'}}>Calculate best option</button>
                </div>
            </>
        }

        {
            decision && chosen !== '' &&
                <div>
                <h2>its time to</h2>
                <h1>
                   {chosen}
                </h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Duke_Nukem.png" alt="" srcset="" />
                <h2>and kick ass</h2>
                <h4>also, chew bubble-gum</h4>
                </div>

                
        }
       

        {/* <div>
            {Array.isArray(problems) && problems.map((item, index) => (
                
                    <li style={{marginTop:'5px', fontSize: '20px'}}  key={index}>{item}</li>
                
                
            ))}
        </div> */}

    </div>

  )
}

export default Aftercoinflip