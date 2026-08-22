import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userId}  = useParams();
  return (
    <div>user : {userId}</div>
  )
}

export default user