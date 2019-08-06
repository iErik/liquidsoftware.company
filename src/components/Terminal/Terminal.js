import React from 'react'
import PropTypes from 'prop-types'

import './Terminal.sass'

export default class Terminal extends React.Component {

  render () {
    return (
      <div className={ `Terminal -${this.props.size}` }>
      </div>
    )
  }
}

Terminal.propTypes = {
  size: PropTypes.string
}

Terminal.defaultProps = {
  size: 'medium'
}
