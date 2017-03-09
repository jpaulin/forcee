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
// 4 f  => Four cups of coffee in office
// 1 s  => An hour of Sauna (also s 1 or just s [enter])
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
// Format of worklog
// 1. rule: The Comment lines
//    - line MUST begin with a '#'. No whitespace before this. All else is comment

// Library inclusions
var _ = require('lodash')
var kbd = require('keypress')

// -----------------------------------------
// + Configuration of the data file format +
// -----------------------------------------
var COMMENTSCHAR = '#'

// The key buffer holding a sequence of keys. These are coming from user
var keybuf = []

// A counter (increments) that shows how many keypresses user has done
var selfDestruct

// The current "live" work log array. Contains all the log entries.
// Normal, zero-based ie. worklog[0] shot first
var worklog = []

/*
 * Summarize a work log and produce a hours list by category.
 * Returns an object that has keys:
 *   comments
 *   items
 */
function doSummary (aWorkLog) {
  var retObj = {
    comments: 0,
    items: 0
  }
  for (var i = 0; i < aWorkLog.length; i++) {
    var focus = aWorkLog[i]
    if (focus[0] === COMMENTSCHAR) {
      retObj.comments++
    } else {
      retObj.items++
    }
  }
  return retObj
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
  Responsible for writing the log. Overwrites any existing
  files.
  Returns:
   true  - all ok, log written to file
   false - file was not ok: permissions, or media error
*/
function writeWorkLog() {
  console.log('writeWorkLog not yet implemented.')
}

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
 * found, adds an entry (or otherwise manipulates) the worklog.
 * This is the callback function to 'keypress' package. Is set up
 * in main code.
 */
function keyLogic (ch, key) {
  var commandRecognized
  console.log('raw ch: ' + ch.valueOf)
  // If a non-valid keypress, exit immediately
  if (!key) { return }
  commandRecognized = false
  selfDestruct++
  // Append the new key (in 'keypress' terms: key.name) to tail of buffer
  keybuf.push(key.name)
  // Write out result to console
  for (var i = 0; i < keybuf.length; i++) {
    console.log('[' + i + '] = ' + keybuf[i])
  }
  console.log('commandRecognized? ' + commandRecognized)
  // Exit conditions: either ESC key , or too long lifetime
  if (selfDestruct > 3) { process.exit(0) }
}

/*
 * Returns the length of the given worklog
 */
function parseLog (aWorkLog) {
  if (!aWorkLog) return 0
  return aWorkLog.length
}

// Init timer. This prevents the key loop from working eternally.
selfDestruct = 0

// Initalize keypress on standard input. Now a callback function handles
// keypresses. This black magic directly from 'keypress' package's manual
kbd(process.stdin)
process.stdin.on('keypress', keyLogic)
process.stdin.setRawMode(true)
process.stdin.resume()

// Raw and dirty testing of FORCEE so far.
// Shove in some work entries. We'll do that directly into the worklog.
// worklog.push('on08032017')
worklog.push('4c')
worklog.push('1cp code planning initialized for FORCEE tool')
worklog.push('cc First lines. The core of key logic function. Also the chains.')
worklog.push('; just testing this format - this is a comment till end of line')
worklog.push('; now we should already be able to get a Summary')

doSummary(worklog)
console.log('Work log length as per items:')
console.log(parseLog(worklog))

writeWorkLog()
