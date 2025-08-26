import React from 'react'

const Button = ({bgcolor, colorParams, text, action =()=>{}  }) => {
  return (
    <button style={{background: bgcolor, color: colorParams, margin: "5px"}}
    onClick={action}> {text} </button>
  )
}

export default Button
