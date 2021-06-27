import { emailService } from "../services/email-service.js"
import emailAdd from "../cmps/email-add.js"
import emailPreview from "../cmps/email-preview.js"

export default {
    template: `
    <section class="prev">
            <emailPreview v-if="email" :email=email  class="s"  @remove="remove" @update="mark(email)"></emailPreview>
            <button @click="remove(email.id)">delete</button>
            <button @click="isReplay">Reply</button>
            <emailAdd v-if="replay"></emailAdd>
            <router-link to="/mail/inbox">x</router-link>
        </div>
    </section>
    `,
    data() {
        return {
            email: null,
            replay:false
        }
    }, created() {
        const { emailId } = this.$route.params
        if (emailId) {
            emailService.getById(emailId)
                .then(email => {
                    this.email = email
                    this.mark()
                })
        }
    },
    computed: {
        isRead() {
            if (!this.email.isRead) {
                return 'un-read'
            }
        },
    },
    methods: {
        remove(emailId) {
            console.log(emailId)
            emailService.remove(emailId)
                .then(this.$router.push('/emails'))
                
        },
        mark() {
            if (!this.email) console.log('NO')
            this.email.isRead = true
            emailService.save(this.email)
        },
        isReplay(){
            this.replay=!this.replay
        },
    },
    components:{
        emailAdd,
        emailPreview
    }
}