import React, { useState, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import PropTypes from 'prop-types'

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, setToDateDisabled] = useState(false)

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData

  const toggleToDateDisabled = () => {
    setToDateDisabled(previousToDateDisabled => !previousToDateDisabled)
  }

  const handleChange = ({ target: { name, value, checked } }) => {
    const newValue = name === 'current' ? checked : value

    setFormData(previousFormData => {
      return { ...previousFormData, [name]: newValue }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    addEducation(formData, history)
  }

  const handleCurrentOnClick = e => {
    handleChange(e)
    toggleToDateDisabled()
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={handleChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              onClick={handleCurrentOnClick}
            />{' '}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={handleChange}
            disabled={toDateDisabled}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation))
