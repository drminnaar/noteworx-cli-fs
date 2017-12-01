'use strict';

// package references

const yargs = require('yargs');


// project references

const noteManager = require('./note-manager');


// build commands

const titleOptions = {
    'alias': 't',
    'describe': 'A unique title that identifies the note',
    'type': 'string',
    'demand': true
};

const contentOptions = {
    'alias': 'c',
    'describe': 'The body or content of the note',
    'type': 'string',
    'demand': true
};

const tagOptions = {
    'describe': 'A tag that can be used to add metadata to a note',
    'type': 'string',
    'demand': true
};

const commands = yargs
    .command('add', 'Add new note', { 'title': titleOptions, 'content': contentOptions })
    .command('find', 'Find note', { 'title': titleOptions })
    .command('list', 'List all notes')
    .command('remove', 'Remove note', { title: titleOptions })
    .command('tag', 'Tag an existing note', { title: titleOptions, tag: tagOptions })
    .help()
    .argv;


// process commands

const command = commands._[0];

switch (command) {

    case 'add': {
        noteManager.addNote(commands.title, commands.content);
        break;
    }

    case 'find': {
        const note = noteManager.getNote(commands.title);

        if (note) {
            console.info(JSON.stringify(note, null, 2));
        } else {
            console.info(`A note having title '${commands.title}' was not found.`);
        }
        break;
    }

    case 'list': {
        const notes = noteManager.getNotes();
        console.info(JSON.stringify(notes, null, 2));
        break;
    }

    case 'remove': {
        noteManager.removeNote(commands.title);
        break;
    }

    case 'tag': {
        noteManager.tagNote(commands.title, commands.tag);
        break;
    }

    default: {
        console.log(`The command '${command}' is not supported`);
    }
}