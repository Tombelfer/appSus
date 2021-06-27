export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <component  @updateNote="setUpdate" @deleteNote="removeIt" :is="note.type" v-for="note in notes" :key="note.id" :info="note.info"  :id="note.id"></component> 
        </section>
    `,
    components: {
    },

    methods: {
        removeIt(id) {
            this.$emit('deleteNoteSelect', id);
        },
        setUpdate(id) {
            this.$emit('updateNoteSelect', id);
        },
        setPinned(id) {
            this.$emit('pinNoteSelect', id);
        },
    },
};
