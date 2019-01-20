import React from 'react'
import {
  AragonApp,
  Button,
  Text,

  observe
} from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

import tesla from './TeslaS.jpg'


const AppContainer = styled(AragonApp)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 20px;
  ul li {
    margin: 20px;
    padding-left: 50px;
  }
  button {
    margin: 20px;
    font-size: 20px;
    color: white;
    background-color: #555;
    font-weight: 600px;
  }
  button:hover{
    background-color: #DDD;
    color: #555;
  }
  .Locked {
    color: red;
  }

  .Unlocked {
    color: green;
  }
  .tesla{
    width: 50%;
    display: block;
    
    border-radius: 5px;
  }

`

class App extends React.Component {
  state = {
    locked: true
  }
  liStyle = {
    listStyleType: "none",
  }

  render() {
    return (
      <AppContainer>
        <img className="tesla" src={tesla} alt="Tesla Model S" />
        <div>
          <div>

            <ul style={{ listStyleType: "none", font: "16px" }}>
              <li>Name: MyCar</li>
              <li>Model: Tesla Model S</li>
              <li>ID: 0</li>
              <li className={((this.props.locked === undefined) ? "Locked" : (this.props.locked === true ? "Locked" : "Unlocked"))}>{"Car State: " +
                ((this.props.locked === undefined) ? "Locked" : (this.props.locked === true ? "Locked" : "Unlocked"))}</li>

            </ul>
          </div>
          <Button onClick={() => this.props.app.lockCar()}>Lock Car</Button>
          <Button onClick={() => this.props.app.unlockCar()}>Unlock Car</Button>
        </div>
      </AppContainer >
    )
  }
}

export default observe(
  observable => observable.map(state => ({ ...state })),
  {}
)(App)