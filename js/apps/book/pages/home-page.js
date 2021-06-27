    import { eventBus } from "../services/event-bus-service.js";
    export default {
        template: `
          <section class="home-page app-main">
            <div class="texts">
              <div>
                <h2>Welcome to my books sshop</h2>
                <h3>Here you will find the best books</h3>
                <button @click="callBus">call the bus</button>
              </div>
              <router-link class="explore-books" to="/book">Explore Books</router-link>
            </div>
            <div class="picture">
              <img class="img-home" src="imgs/book-lover.svg" alt="">
            </div>
          </section>
        `,
        methods:{
          callBus(){
            eventBus.$emit('puk')
          }
        }
      };