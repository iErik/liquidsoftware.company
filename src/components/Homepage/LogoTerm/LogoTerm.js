import React from 'react'
import './LogoTerm.sass'

import Terminal from '@components/Common/Terminal'
import LSCLogo from '@assets/images/LSCLogo.png'


const LogoTerm = () => (
  <Terminal isDark size="small">
    <div className="LogoTerm">
      <img
        className="LogoTerm-img"
        src={ LSCLogo }
        alt="Liquid Software Company"
      />
    </div>
  </Terminal>
)

export default LogoTerm
