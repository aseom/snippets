#!/usr/bin/env node
'use strict'

const childPs = require('child_process')

// No async
var result = childPs.spawnSync('ls', ['-al'])
process.stdout.write(result.stdout)
console.log(`Process ${result.pid} exited with code ${result.status}\n`)

// Async
// Inherit parent process's stdin/stderr, except stdout
var fzf = childPs.spawn('fzf', { stdio: [process.stdin, 'pipe', process.stderr] })
var stdoutBuff = undefined

fzf.stdout.on('data', (buffer) => {
  // Write stdout + save to `stdoutBuff` variable
  process.stdout.write(buffer)
  stdoutBuff = buffer
})

fzf.on('close', (code) => {
  // fzf exited
  console.log(`Selected item: ${stdoutBuff.toString()}`)
})
