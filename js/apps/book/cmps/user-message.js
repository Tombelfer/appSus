import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
      <section class="user-msg">
          <p ref="tom">Hello</p>
          <button @click="callBus">callBus</button>

      </section>
    `,
    created() {
        // console.log('y')
        eventBus.$on('show-msg', this )

        //     console.log('showing', msg)
        // })
    },mounted(){
        
    },
    methods: {
        callBus() {
            console.log(this.$refs.tom)
            eventBus.$on('show-msg', () => {
                console.log('hello')
            })
        }
    }
};