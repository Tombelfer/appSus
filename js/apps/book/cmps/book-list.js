import bookPreview from "./book-preview.js"

export default {
    props:['books'],
    template: `
    <section class="book-list main-layout">
            <li v-for="book in books" :key="book.id" class="book-preview-container">
                <router-link :to="'/books/'+book.id"><book-preview  :book="book" /></router-link>
            </li>
    </section>
    `,
    components: {
        bookPreview
    }
}

