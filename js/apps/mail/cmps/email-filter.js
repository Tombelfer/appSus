 export default {
	template: `
    <section class="email-filter-container">
        <div class="search-container">
            <div class="search-input-container">
                <input v-model="filterBy.txt" @input="filter" type="text" placeholder="Search mail">
            </div>
            <div class="select-container">
                <select class="filter-emails" v-model="filterBy.filter" @change="filter">
                    <option value="ALL">All</option>
                    <option value="READ">Read</option>
                    <option value="UNREAD">Unread</option>
                </select>
            </div>
        </div>
    </section>
    `,
	data() {
		return {
			filterBy: {
				txt: '',
				filter: 'ALL',
			},
		};
	},
	methods: {
		filter() {
			this.$emit('filtered', { ...this.filterBy });
		},
	},
};
