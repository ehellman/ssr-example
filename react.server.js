require("babel-register")({
  // Setting this to false will disable the cache.
  cache: false
});

require('babel-polyfill')

const path = require('path')
const fs = require('fs')
const React = require('react')
const { renderToString } = require('react-dom/server')

const ClientApp = require('./React/index').default

const ServerStyleSheet = require('styled-components').ServerStyleSheet

const sheet = new ServerStyleSheet()
const html = renderToString(sheet.collectStyles(React.createElement(ClientApp)))
const css = sheet.getStyleTags() // or sheet.getStyleElement()

module.exports = function (callback, options) {

  const filePath = path.resolve(__dirname, 'React', 'public', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) return callback(null, err)
    const RenderedApp = htmlData
      .replace('{{CSS}}', css)
      .replace('{{SSR}}', html)
      .replace('{{DATA}}', options)
    callback(null, RenderedApp)
  })

}
