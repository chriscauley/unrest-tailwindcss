module.exports = {}
try {
  // TODO for reasons unknown when you import @unrest/tailwind/dist.css it tries to load this file
  module.exports.plugins = [
    require('tailwindcss')(__dirname + '/tailwind.config.js')
  ]
} catch {}