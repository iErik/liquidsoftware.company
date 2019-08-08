import React from 'react'
import PropTypes from 'prop-types'
import './Terminal.sass'

const HelpText = (props) => (
  <div className="HelpText"></div>
)

const Terminal = ({ size, ...props }) => {
  const parseCommand = (input) => {
    const commands = input.split(' ')

    console.log('command: ', commands)
  }

  const handleKeyUp = ({ keyCode, target }) =>
    keyCode === 13 && parseCommand(target.value)

  const emitCommand = () => {

  }

  return (
    <div className={ `Terminal -${size}` }>
      <div>
        { props.children }
      </div>

      <div className="Terminal-commandLine">
        <span className="Terminal-commandLine-cursor"></span>
        <span className="Terminal-commandLine-indicator">~ $</span>

        <input
          className="Terminal-commandLine-input"
          type="text"
          onKeyUp={ ev => ev.persist() || handleKeyUp(ev) }
        />
      </div>
    </div>
  )
}

Terminal.propTypes = { size: PropTypes.string }
Terminal.defaultProps = { size: 'medium' }

export default Terminal
