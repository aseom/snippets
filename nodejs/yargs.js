#!/usr/bin/env node

var yargs = require('yargs')

var argv = yargs
  .usage('Usage: $0 [options]')
  .help('h', 'Show this help').alias('h', 'help')
  .option('x', {
    alias: 'arg-x',
    desc: 'The x argument',
    type: 'string'
  })
  .option('y', {
    alias: 'arg-y',
    desc: 'The y argument',
    type: 'string'
  })
  .argv

// If variable 'x' has not been declared,
// `x === undefined` raise "ReferenceError", so use `typeof`
if (typeof argv.x === 'undefined' && typeof argv.y === 'undefined') {
  console.error('No option specified!\n')
  yargs.showHelp()
  process.exit(1)
}

if (typeof argv.x !== 'undefined') console.log('X is "' + argv.x + '".')
if (typeof argv.y !== 'undefined') console.log('Y is "' + argv.y + '".')
