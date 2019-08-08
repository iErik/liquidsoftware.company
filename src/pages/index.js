import React from "react"

import BaseLayout from '@layouts/BaseLayout'
import Terminal from '@components/Terminal'
import WelcomeScreen from '@components/WelcomeScreen'

// TODO: Remove inline style

const IndexPage = () => (
  <BaseLayout>
    <Terminal style={{ margin: '0px auto' }}>
      <WelcomeScreen />
    </Terminal>
  </BaseLayout>
)

export default IndexPage
