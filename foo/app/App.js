import React from 'react'
import {
  AragonApp,
  Button,
  Text,

  observe
} from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = {
    locked: true
  }
  render() {
    return (
      <AppContainer>
        <div>
          <div>
            <ul>
              <li>Name: MyCar</li>
              <li>Model: Tesla Model S</li>
              <li>ID: 0</li>
              <li>{"Car State: " + ((this.props.locked === undefined) ? "Locked" : (this.props.locked === true ? "Locked" : "Unlocked"))}</li>

            </ul>
          </div>
          <Button onClick={() => this.props.app.lockCar()}>Lock Car</Button>
          <Button onClick={() => this.props.app.unlockCar()}>Unlock Car</Button>
        </div>
      </AppContainer>
    )
  }
}

export default observe(
  observable => observable.map(state => ({ ...state })),
  {}
)(App)