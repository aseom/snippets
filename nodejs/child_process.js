#!/usr/bin/env node
'use strict'

const childPs = require('child_process')

// No async
var result = childPs.spawnSync('ls', ['-al'])
process.stdout.write(result.stdout)
console.log(`Process ${result.pid} exited with code ${result.status}\n`)

// Async
// Use parent's stdin/stderr, fzf interface would be displayed through stderr
var fzf = childPs.spawn('fzf', { stdio: [process.stdin, 'pipe', process.stderr] })
var stdoutBuff = undefined

fzf.stdout.on('data', (buffer) => {
  // Save fzf stdout to `stdoutBuff` variable
  stdoutBuff = buffer
})

fzf.on('close', (code) => {
  // fzf exited
  console.log(`Selected item: ${stdoutBuff.toString()}`)
})
