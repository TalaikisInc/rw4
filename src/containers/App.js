import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import * as actions from '../actions'

class App extends PureComponent {
  render() {
    return <p>Yo, madafakas</p>
      
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps, actions)(App)
