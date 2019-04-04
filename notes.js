const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)
  if(duplicateNotes.length === 0) {
    notes.push({title, body})
    saveNotes(notes)
    console.log(chalk.green('new note added'))
  } else {
    console.log(chalk.red('note title taken'))
  }

}

const removeNote = title => {
  const notes = loadNotes()
  const newNotes = notes.filter(note => note.title !== title)
  if(notes.length > newNotes.length) {
    console.log(chalk.green(`note ${title} removed`))
    saveNotes(newNotes)
  }else {
    console.log(chalk.red(`no note found`))
  }
}

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (err) {
    return [] //if note.json doesnt exist return an empty array
  }
}

module.exports = {getNotes, addNote, removeNote}