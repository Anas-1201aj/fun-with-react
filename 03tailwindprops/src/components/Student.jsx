import React from 'react'
import Button from './Button'

function Student({
    name,
    marks,
    semester,
    course,
}) {
  return (
    <div className='w-full'>
        <div className="w-auto">
          name =   {name} 
          
         <Button 
         text = "login"/>
          
        </div>
        <div className="w-auto">
          course =   {course}
        </div>
        <div className="w-auto">
          semester =   {semester}
        </div>
        <div className="w-auto">
           marks =  {marks}
        </div>
    </div>
  )
}

export default Student