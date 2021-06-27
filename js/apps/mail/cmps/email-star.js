import emailPreview from "./email-preview.js"
import { emailService } from "../services/email-service.js";
export default {
    props:['emails'],
    template: `
    <div class="email-list">
        <div v-for= "email in toShow" :key="email.id" >
            <emailPreview   :email=email class="email"  @remove="removeEmail" @update="update(email)"></emailPreview>
        </div>
    </div>
    `, data() {
        return {
            emailList: null,
        };
    },
    created() {
        this.loadEmails()
    },
    methods: {
        removeEmail(emailId) {
            console.log('reomove')
            this.$emit('delete', emailId)
        },
        update(email) {
            // console.log('read', email.isRead)
            this.$emit('update', email)
        },
        loadEmails() {
            emailService.query()
                .then((emails) => {
                    this.emailList = emails
                })
        }
    },
    computed: {
        toShow(){
            const emailsToShow = this.emails.filter((email)=>{
                return email.isStar
            })
            return emailsToShow
        } 
    },
    components: {
        emailPreview,
        emailService
    }
}