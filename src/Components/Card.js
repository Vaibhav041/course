import React from 'react'
import label from '../Rectangle 5630label.png'
import Ellipse from '../Ellipse 263.png'
import vector from '../Vector.png'
import vector1 from '../Vector1.png'
import vector2 from '../Vector2.png'
import Rating from '@mui/material/Rating';

const Card = ({dName,pitch, outcomes, price, oPrice, classes, games, cer, rating}) => {
  const arr = rating.split(';');
  return (
    <div className='card'>
        <div className='cardTop'>
          <div className='topImg'>
            <div className='classes'>{classes} Sessions</div>
            <div className='off'>
              <img src={Ellipse} height="65px"/>
              <p className='overText'>20% <br/> off</p>
            </div>
          </div>
          <p className='name'>{dName} <br/> <Rating name="read-only" value={rating[0]}  readOnly/> <span className='review'>({arr[2]} reviews)</span></p>
        </div>
        <div className='cardMid'>
          <div className='pitch'>{pitch}</div>
          <p className='heading'>Students will achieve:</p>
          <ul>
            <li>{outcomes[0]}</li>
            <li>{outcomes[1]}</li>
            <li>+...</li>
          </ul>
          <p className='details'>View Detailed Lesson Plan</p>
          <p className='line'></p>
        </div>
        <div className='cardBottom'>
          <div className='prices'>
            <div>
              <div className='price'>₹ {price} </div>
              <div className='original'>₹ {oPrice} </div>
            </div>
            <div className='classprice'>₹ {Math.floor(price / classes)} <span className='per'>per class</span></div>
          </div>
          <p className='schedule'>We'll schedule the slots as per your convenience</p>
          <div className='acti'>
            <div style={{marginLeft:"10px"}}>
              <img src={vector} style={{marginRight:"2px"}}/>
              <span className='sp'>8 Activities</span>
            </div>
            <div style={{marginLeft:"10px"}}>
              <img src={vector1} style={{marginRight:"2px"}}/>
              <span className='sp'>{games} Games</span>
            </div>
            <div style={{marginLeft:"10px"}}>
            <img src={vector2} style={{marginRight:"2px"}}/>
            <span className='sp'>{cer} Certificates</span>
            </div>
          </div>
          <div className='bContainer'><button className='butt'>Buy Course</button></div>
        </div>
    </div>
  )
}

export default Card