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
            emailsTorender:null
        };
    },
    created() {
        this.loadEmails()
    },
    methods: {
        removeEmail(emailId) {
            this.$emit('delete', emailId)
        },
        update(email) {
            this.$emit('update', email)
        },
        loadEmails() {
            emailService.query()
                .then((emails) => {
                    this.emailList = emails
                    console.log(this.emailList[0])
                })
        }
    },
    computed: {
        toShow(){
            const emailsToShow = this.emails.filter((email)=>{
                return email.isIncomig
            })
            return emailsToShow
        } 
    },
    components: {
        emailPreview,
        emailService
    }
}