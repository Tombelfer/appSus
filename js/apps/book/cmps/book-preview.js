import { bookService } from "../services/book-service.js"
import { i18nService } from "../services/i18n-service.js"

export default {
    props: ['book'],
    template: `
    <article v-if="book" class="book-preview" :class="onSale" >
        <h1 class="title"> {{book.title}}</h1>
        <img :src="book.thumbnail" alt="">
        <p class="price" :class="priceInBold"> {{setCurrency}}</p>
    </article>
    `,
    computed: {
        setCurrency() {
            return i18nService.getCurrency(this.book);
        },
        priceInBold() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20
            }
        },
        onSale() {
            return {
                sale: this.book.listPrice.isOnSale,
            }
        },
    }
}