import React from 'react'
import './StatusBar.sass'

export default class StatusBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: '00:00',
      amPm: 'am',
      date: (new Date()).toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
    }
  }

  componentDidMount () {
    this.loadInterval = setInterval(this.getTime.bind(this), 1000)
  }

  getTime () {
    const takeTwelve = n => n > 12 ?  n  - 12 : n
    const addZero = n => n < 10 ? "0" +  n : n

    setInterval(() => {
      let d, h, m, t, amPm

      d = new Date()
      h = addZero(takeTwelve(d.getHours()))
      m = addZero(d.getMinutes())
      //s = addZero(d.getSeconds())
      t = `${h}:${m}`

      amPm = d.getHours() >= 12 ? "pm" : "am"

      this.setState({
        ...this.state,
        amPm: amPm,
        time: t
      })

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
