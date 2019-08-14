import React from "react"

import BaseLayout from '@layouts/BaseLayout'

import LogoTerm from '@components/Homepage/LogoTerm'
import WelcomeScreen from '@components/Homepage/WelcomeScreen'

// TODO: Remove inline style

const IndexPage = () => (
  <BaseLayout>
    <LogoTerm />
    <WelcomeScreen />
  </BaseLayout>
)

export default IndexPage
