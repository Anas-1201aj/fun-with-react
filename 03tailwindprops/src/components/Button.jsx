import React from 'react'

function Button({
 text,backgroundColor,rounded,textColor,...props
    
}) {
  return (
   <>
   <button className= {`px-2 mt-4 w-20 hover: cursor-pointer ${textColor} ${rounded} ${backgroundColor}`} >
    {text}
   </button>
   </>
  )
}

export default Button