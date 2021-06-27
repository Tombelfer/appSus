import { i18nService } from '../services/i18n-service.js'
import { bookService } from '../services/book-service.js'

export default {
    template: `
    <section v-if="book" class="book-details main-app" :class="onSale">
        <h2 class="titled">{{book.title}}</h2>
        <br>
        <h4>
            <p class="author" v-for="author in book.authors">{{author}}</p>
            <p class="published" >Published:{{book.publishedDate}}</p>
            <p class="bookAge">{{bookAge}}</p>
            <p class="pageVolume">{{pageVolume}} </p>
            <p class="language">Language: {{language}} </p>
            <img :src="book.thumbnail" alt="">
            <h4 :class="priceInBold" class="price">{{setCurrency}}</h4>
        </h4>
        <router-link to="/books/"><button>return</button></router-link> 
    </section>
    <!-- <section v-else >
        <img src="" alt="">
    </section> -->
    `,
    data() {
        return {
            book: null
        }
    },
    created() {
        const { bookId } = this.$route.params
        bookService.getById(bookId)
            .then(book => this.book = book);
            // console.log(book)
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    computed: {
        setCurrency() {
            return i18nService.getCurrency(this.book)
        },
        bookAge() {
            const diff = new Date().getFullYear() - this.book.publishedDate
            if (diff <= 3) return 'Fresh Book!'
            else if (diff >= 10) return 'Veteran Book'
            else return 'Modern Book'
        },
        pageVolume() {
            if (this.book.pageCount > 500) return 'Long reading'
            else if (this.book.pageCount > 200) return 'Decent Reading'
            return 'Light Reading'
        },
        priceInBold() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20
            }
        },
        language() {
            if (this.book.language === 'en') return 'English'
            else if (this.book.language === 'sp') return 'Spanish'
            else return 'Hebrew'
        },
        onSale() {
            return {
                on: this.book.listPrice.isOnSale,
            }
        },
    },
}