import React from 'react'
import { render } from 'react-dom'

import App from 'common/App'
import HomePage from 'pages/HomePage'

render(
  <App>
    <HomePage />
  </App>,
  document.getElementById('root')
)