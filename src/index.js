import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Quiz from './Quiz'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Quiz />, document.getElementById('root'))
registerServiceWorker()