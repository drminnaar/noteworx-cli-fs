'use strict';

// framework references

const fs = require('fs');
const path = require('path');
const os = require('os');


// package references

const uuid = require('uuid/v1');
const moment = require('moment');


// state

const folderPath = path.join(__dirname, './data');
const filePath = path.join(folderPath, 'notes.json');


// add note

const addNote = (title, content) => {
    const note = createNote(title, content);

    if (getNote(title)) {
        throw Error(`A note having title '${title}' already exists.`);
    }

    const notes = getNotes();

    notes.push(note);

    if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);

    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
};

const createNote = (title, content) => {
    return {
        'id': uuid(),
        'title': title,
        'content': content,
        'created_by': os.userInfo().username,
        'created_date': moment().format()
    };
};


// get notes

const getNote = (title) => {
    if (!fs.existsSync(filePath)) {
        return null;
    }

    const notes = getNotes();

    if (!notes) {
        return null;
    }

    const note = notes.filter(note => note.title.toLowerCase() === title.toLowerCase())[0];

    return note;
};

const getNotes = () => {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath);

    if (data && data.length > 0) {
        return JSON.parse(data, null, 2);
    }

    return [];
};


// remove note

const removeNote = (title) => {
    if (!fs.existsSync(filePath)) {
        return;
    }

    let notes = getNotes();

    if (!notes || notes.length < 1) {
        return;
    }

    notes = notes.filter(note => note.title.toLowerCase() !== title.toLowerCase());

    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
};


// tag note

const tagNote = (title, tag) => {

    const note = getNote(title);

    if (!note) {
        throw Error(`A note having title '${title}' does not exist.`);
    }

    if (!note.tags) {
        note.tags = [];
    }

    const tags = tag
        .split(',')
        .map(t => t.trim().toLowerCase())
        .concat(note.tags)
        .sort();

    note.tags = Array.from(new Set(tags));

    removeNote(title);
    
    let notes = getNotes();
    notes.push(note);

    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
};

// exports

module.exports = {
    'addNote': addNote,
    'getNote': getNote,
    'getNotes': getNotes,
    'removeNote': removeNote,
    'tagNote': tagNote
};