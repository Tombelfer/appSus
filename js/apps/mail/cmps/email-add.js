import { emailService } from "../services/email-service.js"
export default {
    template: `
    <section >
        <form @submit.prevent="save">
            <label>emailTo:</label>
            <input v-model="emailToAdd.emailTo" type="text">
            <label>emailSubject:</label>
            <input v-model="emailToAdd.emailSubject" type="text" >
            <label>email body:</label>
            <input v-model="emailToAdd.emailBody" type="text" >
            <button>Save</button>
        </form>
        </section>
    `,
    data() {
        return {
            emailToAdd: {
                id: '',
                isStar: false,
                isIncomig: this.random(),
                emailTo: '',
                emailfrom: 'Noder@gmail.com',
                emailSubject: '',
                emailBody: '',
                sentAt: Date.now(),
                isRead: false
            }
        }
    },
    created() {
        const { emailId } = this.$route.params;
        let compose = this.emailToAdd
        if (emailId) {
            emailService.getById(emailId)
                .then(email => {
                    compose.emailTo = email.emailfrom
                    compose.emailSubject='Ry:'+ email.emailSubject
                });
        } else {
            compose = emailService.createEmail();
        }
    },
    methods: {
        save() {
            console.log('saving...');
            emailService.save(this.emailToAdd)
            .then(email =>{
                console.log(email)
                this.$router.push('/mail/inbox')
            })
        },
        random(){
            if(Math.random() < 0.5)
            return true
        }
    }
}
