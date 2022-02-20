import React from 'react'

export default function Main() {
  return (
    <div className='main'>
        <div className='frame'>
            <a href='https://dreamy-leakey-2ad752.netlify.app/' target='_blank'>
                <img id='profile-image' src='./profile-avatar.jpg' alt='profile-image'/>
            </a>
        </div>
        <p>Abidan Martinez <span id="age" className='lightText'>25</span></p>
        <p className='lightText'>California</p>
    </div>
  )
}
