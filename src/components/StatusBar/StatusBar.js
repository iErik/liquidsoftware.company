import React from 'react'
import './StatusBar.sass'

export default class StatusBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: '00:00',
      date: (new Date()).toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
    }
  }

  componentDidMount () {
    this.loadInterval = setInterval(this.getTime.bind(this), 1000)
  }

  getTime () {
    const addZero = n => n < 10 ? "0" +  n : n

    setInterval(() => {
      const date = new Date()
      const hours = addZero(date.getHours())
      const minutes = addZero(date.getMinutes())
      const time = `${hours}:${minutes}`

      this.setState({ ...this.state, time })
    }, 1000)
  }

  render () {
    return (
      <div className="StatusBar">
        <div className="StatusBar-section -left">
          <span className="StatusBar-text">
            Liquid Software Company
          </span>
        </div>
        <div className="StatusBar-section -center">
          <span className="StatusBar-text -highlight">
            { `${this.state.date} ${this.state.time}` }
          </span>
        </div>

        <div className="StatusBar-section -right">
          <span className="StatusBar-text">
            EN / PT
          </span>
        </div>
      </div>
    )
  }
}
