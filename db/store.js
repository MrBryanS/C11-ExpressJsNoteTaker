const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    async getNotes() {
        const notes = await this.read();
        let parsedNotes = JSON.parse(notes);
        try {
            parsedNotes = [].concat(JSON.parse(notes));

        } catch (error) {
            parsedNotes = [];

        }
        
    }
    async addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        }
        const newNote = { title, text, id: uuidv4() };
        const notes = await this.getNotes();
        const updatedNotes = [...notes, newNote];
        await this.write(updatedNotes);
        return newNote;
    }
    async removeNote(id) {
        const notes = await this.getNotes();
        const filteredNotes = notes.filter((note) => note.id !== id);
        return await this.write(filteredNotes);
    }
}

module.exports = new Store();
