import React, { useState } from 'react'
import Button from '../../PrimaryComponents/Button/Button'
import Input from '../../PrimaryComponents/Input/Input'
import './Card.css'

const Card = ({ text, description, image, setDivBG=()=>{}}) => {
    const [mint, setMint] = useState("Parent")
  return (
    <>
    <div className='card-container'  onClick={()=> setDivBG("Blue")}>
      <div className='cardComponent'>
          <div style={{ justifyContent: "center" }} >
              <img src={image} alt="teen" width={100} height={100}/>
          </div>
          <Input label={""}/>
          <p>{text}</p>
          {mint}
          <p>{description}</p>
          <Button bgColor={"#000"} setMint={setMint}   colorParams={"red"} action={()=> alert("Button clicked")} text={"click"}/>
      </div>
    </div>
    </>
  )
}

export default Card