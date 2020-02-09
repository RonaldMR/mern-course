import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('')

  const handleChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addComment(postId, { text })
    setText('')
  }

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <form onSubmit={handleSubmit} className="form my-1">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm)
