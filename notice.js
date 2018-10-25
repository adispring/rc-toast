import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Notice extends Component {
  static propTypes = {
    content: PropTypes.string
  }
  render () {
    const { content } = this.props
    return (
      <div className={`toast-notice`}>
        <span>{content}</span>
      </div>
    )
  }
}

export default Notice
