import React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import { History, createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import RootStore from 'store'

import { Capacitor } from '@capacitor/core'

const rootStore = new RootStore()
const hashHistory: History = createHashHistory()
const history = syncHistoryWithStore(hashHistory, rootStore.router)

if (process.env.NODE_ENV !== 'test') {
  console.log('Debug info : ___debug')
  console.log(process.env)
  ;(window as any).___debug = {
    rootStore,
    history,
    env: process.env,
    Capacitor
  }
}

const globalTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontSize: 12
  }
})

interface Props {}

const Injector: React.FC<Props> = ({ children }) => {
  return (
    <Provider {...rootStore}>
      <Router history={history}>
        <ThemeProvider theme={globalTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default Injector
