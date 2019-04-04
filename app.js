const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({title, body}) => notes.addNote(title, body)
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler: ({title}) => notes.removeNote(title)
})
yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler: () => notes.listNotes()
})
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => console.log('read a note.')
})

yargs.parse()
