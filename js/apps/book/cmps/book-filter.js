import { eventBus } from "../services/event-bus-service.js";

export default {
    template: `
    <section class="book-filter">
            <input v-model="filterBy.title" type="text" @input="filter" placeholder="Search...">
            <input v-model.number="filterBy.fromPrice" type="number" @input="filter" placeholder="Search...">
            <input v-model.number="filterBy.toPrice" type="number" @input="filter" placeholder="Search...">
            <h4>filter:</h4>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: '',
                toPrice: '',
            },
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
        },
        
    },

}