const fs = require('fs')
const chalk = require('chalk')

module.exports = {

  addNote(title, body) {
    const notes = this.loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote) {
      notes.push({title, body})
      this.saveNotes(notes)
      console.log(chalk.green('new note added'))
    } else {
      console.log(chalk.red('note title taken'))
    }
  },

  removeNote(title) {
    const notes = this.loadNotes()
    const newNotes = notes.filter(note => note.title !== title)
    if(notes.length > newNotes.length) {
      console.log(chalk.green(`note ${title} removed`))
      this.saveNotes(newNotes)
    }else {
      console.log(chalk.red(`no note found`))
    }
  },
  listNotes() {
    const notes = this.loadNotes()
    notes.forEach(({title, body}) => {
      console.log(`This is the title: ${chalk.yellow(title)}. 
      This is the body: ${chalk.red(body)}.`)
    })
  },

  saveNotes: notes => fs.writeFileSync('notes.json', JSON.stringify(notes)),

  loadNotes: () => {
    try {
      return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (err) {
      return [] //if note.json doesnt exist return an empty array
    }
  },
  readNotes(title) {
    const notes = this.loadNotes()
    const foundNote = notes.find(note => note.title == title)
    if(foundNote) {
      console.log(chalk.green(`title: ${foundNote.title} body: ${foundNote.body}`))
    } else {
      console.log(chalk.red('note not found'))
    }
  }
}




