const React = require('react');
const deepmerge = require('deepmerge');
const Redbox = require('redbox-react').default;
const defaultStyle = require('redbox-react/lib/style').default;

const style = deepmerge(defaultStyle, {
  redbox: {
    background: 'white',
    color: 'hsl(240, 5%, 15%)',
    padding: '40px'
  },
  file: {
    color: 'hsla(240, 5%, 15%, 0.5)'
  },
  linkToFile: {
    color: 'hsla(240, 5%, 15%, 0.5)'
  }
});

const ErrorBox = props => React.createElement(Redbox, deepmerge({style}, props));
ErrorBox.displayName = 'ErrorBox';
module.exports = ErrorBox;
