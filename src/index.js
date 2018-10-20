import * as React from 'react'

window.__GLOBAL_STATE__ = window.__GLOBAL_STATE__ || {}

const ReactContext = React.createContext({})
const STATE_CHANGED = 'GLOBAL_STATE_CHANGED'

global.updateState = state => {
  const newState = (window.__GLOBAL_STATE__ = { ...window.__GLOBAL_STATE__, ...state })
  window.dispatchEvent(new CustomEvent(STATE_CHANGED, { detail: newState }))
}

export const StateConsumer = ReactContext.Consumer

export class StateProvider extends React.Component {
  constructor(props) {
    super(props)

    window.addEventListener(STATE_CHANGED, ({ detail: state }) => {
      this.setState(state)
    })

    this.state = {
      ...props.value
    }
  }

  componentDidMount = () => {
    global.updateState(this.state)
  }

  updateState = state => {
    global.updateState(state)
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
