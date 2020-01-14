import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// The serviceworker is supplying the user-page resources when navigating to a
// project page. For this reason, we are disabling the service worker.
serviceWorker.unregister()
