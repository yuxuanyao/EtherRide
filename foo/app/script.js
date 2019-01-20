import '@babel/polyfill'

import Aragon from '@aragon/client'

const app = new Aragon()



let appState = {
  locked: true,
}

app.state().subscribe(state => {
  appState = state
})

app.events().subscribe(handleEvents)

async function handleEvents(event) {
  let nextState
  switch (event.event) {
    case 'LockCar':
      nextState = await getValue(appState)
      console.log("Lock Car event fired:", nextState)
      break
    case 'UnlockCar':
      nextState = await getValue(appState)
      console.log("Unlock Car event fired:", nextState)
      break
    default:
      return state
  }
  app.cache('state', nextState)
}

function getValue(state) {
  // Get current value from the contract by calling the public getter
  return new Promise(resolve => {
    app
      .call('locked')
      .first()
      //.map(value => parseInt(value, 10))
      .subscribe((value) => {
        console.log(value)
        state = {
          ...state,
          locked: value
        }
        resolve(state)
      })
  })
}
