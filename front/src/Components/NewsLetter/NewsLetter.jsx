import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers on your email</h1>
        <p>suscribe to our NewsLetter and stay update</p>
        <div>
            <input type="email" placeholder='your email' />
            <button>suscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter;
