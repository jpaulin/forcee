// FORCEE
// Keeps track of time and items in projects
//
// With a pretty UI
//
// Entry
// Log search
// Summary of entries (also Caffeine[TM])
// Potato Timer
// Calendar
//
//
// - Add '4 c' => log 4 cups of coffee having been brewed / consumed
//
//
// Keyboard logic: 2 or 3 keypresses logs a new entry
//
// 4 c  => Four cups of coffee in office
// c c  => Code, creation (writing payload code for the game)
// c d  => Code documentation
// c t  => Code tests (unit tests, e2e, ...)
// c r  => Code "Just refactoring" (TM)
// confirm with [Enter]

// The command engine allows numeric quantities to be entered either
// as prefix or postfix. So '3 c c' is the same as 'c c 3' for making
// a new entry of "3 hours code creation".
//
// Within the active lifetime of an ENTRY BUFFER,
// we keep track of two separate items:
// * numerics
// * code
//
// Key commands are either 2 or 3 in their length.
// Two-character commands
//
// - assume that a prefix number has been omitted; use defaults as number
//   examples:
//     c c => 1 hour of "code creation"
//     4 c => number + command
//
// Three-character commands
//
//

// var _ = require('lodash')

// The key buffer holding a sequence of keys. These are coming from user
var keybuf = []

// The current "live" work log array. Contains all the log entries.
var worklog = []

/*
 * Summarize a work log and produce a hours list by category.
 */
function doSummary (aWorkLog) {
  for (var i = 0; i < aWorkLog.length; i++) {
    console.log('new line: ' + aWorkLog[i])
  }
}

// Acceptable key commands, or 'chains', are defined here.
// A simple mapping:
// sequence -> action
// All actions will be then piped through the 'decider' function.
var acceptchains = [
  { seq: 'ncc', result: 'addCode' },
  { seq: 'nc', result: 'addCoffeeEntry' }
]

/*
  Responsible for writing the log.
  function writeWorkLog() {
}
*/

/*
 * Adds a corresponding log entry into the worklog.
 * Note: this function does not keep copy of the live worklog on disk.
 * So remember to handle the writing.
 */
function decider (action, actionDetails) {
  // Works with 'already parsed' data, ie. the keybuffer has been
  // done and dealt with. Now we are talking about real task entry.
  // Byte walk with me.
}

/*
 * Processes key presses in the program. Once a valid pattern is
 * found, adds or otherwise manipulates the worklog.
 * newKey - character case sensitive, or NULL to initialize
 */
function keyLogic (newKey) {
  var commandRecognized
  // Initialize only upon request
  if (!newKey) { keybuf = [] }
  commandRecognized = false
  while (!commandRecognized) {
    commandRecognized = true
  }
  decider(keybuf)
}

/*
 * Returns the length of the given worklog
 */
function parseLog (aWorkLog) {
  if (!aWorkLog) return 0
  return aWorkLog.length
}

function testSummary (aWorkLog) {
  for (var i = 0; i < aWorkLog.length; i++) {
    console.log(aWorkLog[i])
  }
}

// Raw and dirty testing of FORCEE so far.
// Shove in some work entries. We'll do that directly into the worklog.
worklog.push('on08032017')
worklog.push('4c')
worklog.push('1cp code planning initialized for FORCEE tool')
worklog.push('cc First lines. The core of key logic function. Also the chains.')
worklog.push('; just testing this format - this is a comment till end of line')
worklog.push('; now we should already be able to get a Summary')

testSummary(worklog)
console.log('Work log length as per items:')
console.log(parseLog(worklog))
