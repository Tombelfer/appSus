import { emailService } from "../services/email-service.js"
import emailList from "../cmps/email-list.js"
import emailStatus from "../cmps/email-status.js"
import emailFilter from "../cmps/email-filter.js"
import emailMenu from "../cmps/email-menu.js"
import { eventBus } from "../../../services/event-bus-service.js"

export default {
    template: `
        <section class="email-app">
                <img src="img/apps/mail/app/logo (1).png" alt="" class="logo">
                <emailMenu @filtered="setFilter" @boxFilter="setBox" class="menu" :emails="emails"></emailMenu>
                <router-view :emails="emailsToShow" @delete="removeEmail" @update="updateEmail" class="list"></router-view>
                <emailFilter  @filtered="setFilter" class="filter" ></emailFilter>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
        }
    },
    created() {
        this.loadEmails()
        eventBus.$emit('setFilter',this.setFilter)
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        },
        removeEmail(emailId) {
            emailService.remove(emailId)
                    .then(() => {
                        const msg = {
                            txt: 'Email Deleted',
                            type: 'success'
                        };
                        eventBus.$emit('show-msg', msg);
                    this.loadEmails()
                })
        },
        updateEmail(email) {
            emailService.save(email)
            .then(() => {
                const msg = {
                    txt: 'Email updated!',
                    type: 'success'
                };
                eventBus.$emit('show-msg', msg);
            this.loadEmails()
        })
    },
        setFilter(filter) {
            this.filterBy = filter
        },
        setBox(box){
            this.box = box
        }
    }, computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails
            const searchStr = this.filterBy.txt.toLowerCase();
            const filter = this.filterBy.filter
            const emailsToShow = this.emails.filter((email) => {
                if (filter === 'ALL') {
                    return (
                        email.emailSubject.toLowerCase().includes(searchStr) ||
                        email.emailTo.toLowerCase().includes(searchStr) ||
                        email.emailfrom.toLowerCase().includes(searchStr) ||
                        email.emailBody.toLowerCase().includes(searchStr) && (email.isIncomig)
                    )
                }
                else if (filter === 'READ') {
                    return (email.emailSubject.toLowerCase().includes(searchStr) ||
                        email.emailTo.toLowerCase().includes(searchStr) ||
                        email.emailfrom.toLowerCase().includes(searchStr) ||
                        email.emailBody.toLowerCase().includes(searchStr))
                        && email.isRead
                }
                else if (filter === "UNREAD") {
                    return (email.emailSubject.toLowerCase().includes(searchStr) ||
                        email.emailTo.toLowerCase().includes(searchStr) ||
                        email.emailfrom.toLowerCase().includes(searchStr) ||
                        email.emailBody.toLowerCase().includes(searchStr))
                        && !email.isRead

                }
            })
            return emailsToShow
        }
    },
    components: {
        emailFilter,
        emailMenu,
        emailList,
        emailStatus,
    }
}