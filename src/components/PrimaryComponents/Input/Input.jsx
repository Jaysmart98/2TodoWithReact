import React from 'react'

const Input = ({bgcolor="#fff", colorParams="black", type="text", placeholder="anything", label="Free", required, onChange =()=>{}, showLabel= true}) => {
  
  return (
   <>
    <div style={{display:"flex", gap:"10px"}} >

      {showLabel? <label style={{fontSize:"28px"}}> {label}: </label>: null }

      <input onChange={onChange} type={type} placeholder={placeholder} required={required} style={{background: bgcolor, color: colorParams, margin: "5px", width:"300px", height:"20px", borderRadius:"20px", textAlign:"center"}} />
    </div>
   </>
  )
}

export default Input
