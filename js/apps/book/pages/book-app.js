import { bookService } from "../services/book-service.js"
import booksList from "../cmps/book-list.js"
import bookFilter from "../cmps/book-filter.js"
import bookDetails from "../cmps/book-details.js"
import { eventBus } from "../services/event-bus-service.js"
import userMessage from "../cmps/user-message.js"
import appHeader from "/js/apps/book/cmps/appHeader.js"
export default {
    template: `
    <section class="book-app">
        <appHeader></appHeader>
    <user-message/>
    <book-filter class="main-layout" @filtered="setFilter" />
    <books-list :books="booksToShow" @selected="previewBook"/>
    <book-details :book="selectedBook" v-if="isDetailes"@close="closePreview"/>
    </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            isDetailes: false,
            selectedBookId: null
        }
    },
    created() {
        this.loadBooks()
    },
    methods: {
        loadBooks(){
            bookService.query()
            .then(books => {
                this.books = books
            })
        },
        closePreview() {
            this.isDetailes = false
        },
        previewBook(id) {
            this.isDetailes = true
            this.selectedBookId = id
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        isFilterEmpty() {
            return !this.filterBy || (!this.filterBy.title && !this.filterBy.minPrice && this.filterBy.maxPrice === Infinity);
        }
    },
    computed: {
        booksToShow() {
            if (
                !this.filterBy ||
                (this.filterBy.title === '' &&
                    this.filterBy.fromPrice === '' &&
                    this.filterBy.toPrice === '')
            ) {
                return this.books;
            }
            if (this.filterBy.fromPrice === '') this.filterBy.fromPrice = 0;
            if (this.filterBy.toPrice === '') this.filterBy.toPrice = Infinity;
            const searchStr = this.filterBy.title.toLowerCase();
            const booksToShow = this.books.filter((book) => {
                return (
                    book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount < this.filterBy.toPrice
                );
            });
            return booksToShow;
        },
        selectedBook() {
            if (!this.selectedBookId) return
            const bookToPreview = this.books.filter(book => {
                return book.id === this.selectedBookId
            })
            return bookToPreview
        }
    },
    components: {
        appHeader,
        booksList,
        bookFilter,
        bookDetails,
        userMessage
    }
}
