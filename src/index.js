import * as React from 'react'

window.GlobalState = window.GlobalState || {}

const ReactContext = React.createContext({})

class StateProvider extends React.Component {
  state = {
    ...window.__GLOBAL_STATE__
  }

  updateState = state => {
    window.__GLOBAL_STATE__ = { ...window.__GLOBAL_STATE__, ...state }
  }

  render() {
    const { children } = this.props

    return (
      <ReactContext.Provider
        value={{
          globalState: this.state,
          updateState: this.updateState
        }}
      >
        {children}
      </ReactContext.Provider>
    )
  }
}

export default { StateProvider, StateConsumer: ReactContext.Consumer }
