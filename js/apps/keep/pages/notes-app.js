import { noteService } from '../services/note-service.js';
import noteList from '../cmps/note-list.js';

export default {
    template: `
        <section class="notes-app">
            <!-- <search-note @filtered="setFilter" /> -->
            <!-- <add-note v-if="!isUpdating" @addNote ="addNewNote"  /> -->
            <update-note v-if="isUpdating" :noteId="noteId" @updateNote="updateSelectedNote"/>
            <note-list :notes="notesToShow"  @updateNoteSelect="setUpdate" @deleteNoteSelect="removeNote" v-if="notes"/>
        </section>
        `,

    components: {
        noteList,
    },

    data() {
        return {
            notes: null,
            isUpdating: false,
            noteId: '',
            filterbyQuery: {
                title: '',
            }
        };
    },
    computed: {
        notesToShow() {},
    },

    methods: {
        loadNotes() {
        },
        addNewNote(newNote) {
        },
        removeNote(id) {
        },
        setUpdate(id) {
        },
        updateSelectedNote(updatedNote) {
        },
        setFilter(filterby) {
        },
    },
    created() {
        this.loadNotes();
    },
};
