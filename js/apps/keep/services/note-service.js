import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
const gNotes = _createNotes();
utilService.saveToStorage(NOTES_KEY, gNotes);

export const noteService = {
    query,
    create,
    remove,
    update
};

function query() {
    return storageService.query(NOTES_KEY);
}

function create(note) {
    note.id = utilService.makeId();
    if (note.type === 'noteTodo') note.info.todos = _foramtTodos(note);

    return storageService.post(NOTES_KEY, note);
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function update(updatedNote) {
    if (updatedNote.type === 'noteTodo') updatedNote.info.todos = _foramtTodos(updatedNote);
    return storageService.put(NOTES_KEY, updatedNote);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: 'noteText',
                isPinned: false,
                info: {
                    txt: 'Fullstack Me Baby!',
                    backgroundColor: '#ffffff',
                },
            },
            {
                id: utilService.makeId(),
                type: 'noteImg',
                isPinned: false,
                info: {
                    url: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.18169-9/10689910_10152619254033614_3998000759476289597_n.jpg',
                    title: 'Me playing Mi',
                    backgroundColor: '#ffffff',
                    txt: '',
                },
            },
            {
                id: utilService.makeId(),
                type: 'noteTodo',
                isPinned: false,
                info: {
                    backgroundColor: '#ffffff',
                    label: 'How was it:',
                    txt: '',
                    todos: [
                        { id: utilService.makeId(), txt: 'Do that', doneAt: null, isDone: false },
                        {
                            id: utilService.makeId(),
                            txt: 'Do this',
                            doneAt: '',
                            isDone: false,
                        },
                    ],
                },
            },
            {
                id: utilService.makeId(),
                type: 'noteVideo',
                isPinned: false,
                info: {
                    txt: 'My video!',
                    url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
                    backgroundColor: '#ffffff',
                },
            },
        ];
    }
    return notes;
};
