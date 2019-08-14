import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Terminal.sass'


// Partial Components
// ------------------

const HelpText = (props) => (
  <div className="HelpText"></div>
)

const CommandLine = ({ onKeyUp }) => (
  <div className="Terminal-commandLine">
    <span className="Terminal-commandLine-cursor"></span>
    <span className="Terminal-commandLine-indicator">~ $</span>

    <input
      className="Terminal-commandLine-input"
      type="text"
      onKeyUp={ ev => ev.persist() || onKeyUp(ev) }
    />
  </div>
)


// Terminal Component
// ------------------


const Terminal = ({ size, isDark, isInteractive, children }) => {
  const parseCommand = (input) => {
    const commands = input.split(' ')
  }

  const handleKeyUp = ({ keyCode, target }) =>
    keyCode === 13 && parseCommand(target.value)

  const emitCommand = () => { }

  const cssClasses = () => {
    return classNames(
      'Terminal',
      `-${size}`,
      { '-dark': isDark },
    )
  }

  return (
    <div className={ cssClasses() }>
      <div>
        { children }
      </div>

      { isInteractive && <CommandLine onKeyUp={ handleKeyUp } /> }
    </div>
  )
}

Terminal.propTypes = {
  size: PropTypes.string,
  isDark: PropTypes.bool,
  isInteractive: PropTypes.bool
}

Terminal.defaultProps = {
  size: 'medium'
}

export default Terminal
