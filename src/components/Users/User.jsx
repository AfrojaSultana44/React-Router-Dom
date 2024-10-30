import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    const {id, name, email,phone} = user
  return (
    <div className='border border-yellow-500 rounded-2xl p-5'>
     <h2>{name}</h2>
     <p>Email: {email}</p>
     <p>Phone: {phone}</p>
     <Link to={`/user/${id}`}>Show Details</Link>
     <Link to={`/user/${id}`}><button className='p-2 ml-3 border rounded-xl'>Click me</button></Link>
    </div>
  )
}

export default User