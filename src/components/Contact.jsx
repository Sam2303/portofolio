import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { Button } from 'bootstrap'

const Contact = props => {
  return (
    <div className='d-flex flex-column'>
        <h2 className='display-2'>Contact Me</h2>
        <a href='mailto:sjp2303@hotmail.com' className='col-md-8 row'>
            <i class="far fa-envelope" className="display-3"></i>
            <p>Email</p>
        </a>
    </div>
  )
}

Contact.propTypes = {}

export default Contact