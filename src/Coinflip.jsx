import React from 'react'
import {useState, useEffect} from 'react'
 
const Coinflip = ({justdo, setJustdo}) => {

  const [advice, setAdvice] = useState('')
  
  let url = "https://ih0.redbubble.net/image.3663660817.8451/raf,360x360,075,t,fafafa:ca443f4786.jpg"

  const handleClick = () => {
    setJustdo(false)
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
          <img  src={url} alt="" srcset="" />
          <h3 onClick={handleClick} style={{ cursor:'pointer'}}>click here for optional advice</h3>
        </div>}

        {!justdo && 
          <div>
              
              <h1> 
                 {advice}
              </h1>
          </div>
        }
        
        
    </div>
  )
}

export default Coinflip