import React from 'react'
import image from '../resources/me.png'

const WelcomePage = () => {
  return (
    <div className='my-5'>
      <h1 className='py-2  display-1'>Hi, I'm Sam</h1>
      <h2 className='py-1  display-2'>Technology Graduate Engineer at American Express</h2>
      <div className='text-center'>
        <img src={image} alt='drawn portrate of me' className='img-fluid p-2'></img>
      </div>
    </div>
  )
}

export default WelcomePage