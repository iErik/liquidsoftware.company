import React from 'react'
import './WelcomeScreen.sass'

import Terminal from '@components/Common/Terminal'
import AsciiLogo from '@assets/images/AsciiLogo@2x.png'


const WelcomeScreen = () => (
  <Terminal isInteractive>
    <div className="WelcomeScreen">
      <div className="WelcomeScreen-logo">
        <img
          className="WelcomeScreen-logoImg"
          src={ AsciiLogo }
          alt="Liquid Software Company"
        />
      </div>

      <p className="text">
        Hi, welcome to our website, we’re a passionate digital agency that loves
        to build beautiful websites, desktop apps, mobile apps, and overall
        amazing digital experiences to our users and clients.
      </p>

      <p className="text -pink">
        To navigate through this website, type <em>open &lt;pageName&gt; </em>
        in the command prompt, here are the pages you have access to:
      </p>

      <ol className="list">
        <li>Homepage</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
      </ol>

      <p className="text">
        Ex: <em>open Portfolio</em>
      </p>
    </div>
  </Terminal>
)

export default WelcomeScreen
