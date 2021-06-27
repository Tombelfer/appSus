export default {
    props: ['emails'],
    template: `
    <div class="status">
        <p>You have {{unreadEmails}} unread message</p>
            <progress :value="sumOfRead" :max="sumOfEmails"></progress>
    </div>
    `,
    computed: {
        sumOfEmails() {
            return this.emails.length
        },
        sumOfRead() {
            this.isRead = 0
            this.emails.forEach((email) => {
                if (email.isRead) this.isRead++
            })
            return this.isRead
        },
        unreadEmails(){
            this.isUnRead =0
            this.emails.forEach(email => {
                if(!email.isRead) this.isUnRead++
            })
            return this.isUnRead;
        },
        incoming(){
            this.isIncoming =0
            this.emails.forEach(email =>{
                if (email.isIncomig) this.isIncoming++ 
            })
            return this.isIncoming
        }
    },
}