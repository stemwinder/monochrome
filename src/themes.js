const theme = require('./theme');

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: 'monochrome-dark-contrast',
    background: '#101010',
    foreground: '#EBEBEB',
    amplifier: 1.2,
  })
];

module.exports = themes;
