import React from 'react'
import './BaseLayout.sass'

import StatusBar from '@components/StatusBar'

export default class BaseLayout extends React.Component {

  render () {

    return (
      <div className="BaseLayout -full-size">
        <StatusBar />

        <div className="BaseLayout-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}
