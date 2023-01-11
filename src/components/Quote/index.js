import React from 'react'
import '../style.css';
import { Link } from 'react-router-dom'
// import '../Dashboard'


function Quote() {
  return (
    <div className='quote'>
        
        <blockquote className="openingQuote" title='Opening'>
            "You never know where your actions will lead to. But if you dont do anything they will lead you nowhere."
        </blockquote>

        <div className='character' title='MahatmaGandhi'>~Mahatma Gandhi</div>

        <Link to='/Dashboard'><button>Who Is Tameka McLean</button></Link>
    </div>
  )
}

export default Quote;