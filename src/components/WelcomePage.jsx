import React from 'react'
import PropTypes from 'prop-types'
import image from '../resources/me.png'

const WelcomePage = props => {
  return (
    <div>
        <h1 className='py-2  display-1'>Hi, I'm Sam</h1>
        <h2 className='py-1  display-2'>Technology Graduate Engineer at American Express</h2>
        <div className='text-center'>
          <img src={image} alt='drawn portrate of me' className='img-fluid p-2'></img>
        </div>
    </div>
  )
}

WelcomePage.propTypes = {}

export default WelcomePage