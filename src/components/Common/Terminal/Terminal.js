import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link, navigate } from 'gatsby'

import './Terminal.sass'


// Terminal Commands
// -----------------

const routes =
[ { name: 'Homepage',  path: '/' }
, { name: 'Portfolio', path: '/portfolio' }
, { name: 'Services',  path: '/services' }
, { name: 'About Us',  path: '/about' }
, { name: 'Contact',   path: '/contact' }
]

const nameToPath =
{ 'Homepage' : '/'
, 'Portfolio': '/portfolio'
, 'Services' : '/services'
, 'About Us' : '/about'
, 'Contact'  : '/contact'
}

const termCommands =
{ open: (routeName) => navigate(nameToPath[routeName])
, help: () => ({})
}


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

class Terminal extends React.Component {
  constructor (props) {
    super(props)
  }

  cssClasses () {
    return classNames
      ( 'Terminal'
      , `-${this.props.size}`
      , { '-dark': this.props.isDark }
      )
  }

  handleKeyUp ({ keyCode, target }) {
    return keyCode === 13 && this.parseCommand(target.value)
  }

  parseCommand (input) {
    const [ command, ...args ] = input.split(' ')

    if (Object.keys(termCommands).includes(command))
      termCommands[command].apply(null, args)
  }

  // We'll have an array of errors in the state. For each error
  // we're gonna render it using this function, each error msg
  // will be composed of the message itself, plus a dummy, non-
  // interactive CommandLine before it.
  renderErrors () {
    return <span />
  }

  render () {
    return (
      <div className={ this.cssClasses() }>
        <div class="Terminal-inner">
          { this.props.children }
        </div>

        { this.renderErrors() }

        { this.props.isInteractive && <CommandLine onKeyUp={ this.handleKeyUp } /> }
      </div>
    )
  }
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
