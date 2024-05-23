import React from 'react'
import {useState, useEffect} from 'react'
import Aftercoinflip from './Aftercoinflip'
 
const Coinflip = ({justdo, setJustdo}) => {

  const [advice, setAdvice] = useState('')
  const [anything, setAnything] = useState(false)
  
  let url = "https://ih0.redbubble.net/image.3663660817.8451/raf,360x360,075,t,fafafa:ca443f4786.jpg"

  const handleClick = () => {
    setJustdo(false)
  }

  const handleAnythingElse = () => {
    setAnything(true)
  }

  useEffect(() => {
    const getAdvice = async () => {
      ;
      try {
        const response = await fetch("https://api.adviceslip.com/advice")
        if(!response.ok) {
          throw new Error("not ok")
      
        }
        const data = await response.json()
        setAdvice(data.slip.advice)
      } catch (error) {
        console.error("fetch rereo", error)
      }
    }
    getAdvice();

  }, [])


  return (
    <div className='container'>

        {justdo && <div id="imgdiv">
          <img  src={url} alt="" srcset="" style={{maxWidth: '100%'}}/>
          <h2 onClick={handleClick} style={{ cursor:'pointer'}}>click here for optional advice</h2>
        </div>}

        {!justdo && 
          <div>
              { !anything &&
              <>
              <h1 style={{maxWidth: '100%'}}> 
                 {advice}
              </h1>

              <h4 onClick={handleAnythingElse} style={{position: 'relative', left: '50%',transform: 'translateX(-50%)', cursor: 'pointer'}}>
                still need help?</h4>
                </>
              }

              {
                anything && <Aftercoinflip/>
              }
          </div>
        }
        
        
    </div>
  )
}

export default Coinflip