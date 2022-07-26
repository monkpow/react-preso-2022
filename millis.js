const assert = require('assert');

const seconds_in_ms = 1000
const minutes_in_ms = seconds_in_ms * 60
const hours_in_ms   = minutes_in_ms * 60

const zeroPad = (n) => n.toString().padStart(2, 0)

function getTimestamp(ms) {
  let hours   = ms / hours_in_ms
  let minutes = ( ms % hours_in_ms ) / minutes_in_ms
  let seconds = ( ms % minutes_in_ms ) / seconds_in_ms

  return [ hours, minutes, seconds ]
          .map(Math.floor)
          .map(zeroPad)
          .join(":")
}


assert.equal(getTimestamp(21),"00:00:00")
assert.equal(getTimestamp(210),"00:00:00")
assert.equal(getTimestamp(2100),"00:00:02")
assert.equal(getTimestamp(21000),"00:00:21")
assert.equal(getTimestamp(210000),"00:03:30")
assert.equal(getTimestamp(2100000),"00:35:00")
assert.equal(getTimestamp(210000000),"58:20:00")

console.log('.');
