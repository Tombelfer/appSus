import { emailService } from "../services/email-service.js";
import emailStatus from "./email-status.js";
import emailFilter from "./email-filter.js";
export default {
    props: ['emails'],
    template: `
    <div>
        <router-link to="/compose/" class="new">
        <img src="img/apps/mail/app/create_32dp.png" alt="">
        </router-link>
        <section>
            <router-link to="/mail/inbox" class-active="active-link">
            <div class="email-status">
                <p>Inbox ({{incoming}}) </p>
            </div>
            </router-link>
            <router-link to="/mail/star" active-class="active-link" exact>
            <div class="email-status ">
            <p>Importent ({{stared}}) </p>
            </div>
            </router-link>
            <router-link to="/mail/sent" active-class="active-link" exact>
            <div class="email-status" >
            <p>Sent ({{sent}}) </p>
            </div>
            </router-link>
            </section>
            <emailStatus :emails="emails"></emailStatus>
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
        unreadEmails() {
            this.isUnRead = 0
            this.emails.forEach(email => {
                if (!email.isRead) this.isUnRead++
            })
            return this.isUnRead;
        },
        sent() {
            this.isSent = 0
            this.emails.forEach(email => {
                if (!email.isIncomig) this.isSent++
            })
            return this.isSent
        },
        incoming() {
            this.isIncoming = 0
            this.emails.forEach(email => {
                if (email.isIncomig) this.isIncoming++
            })
            return this.isIncoming
        },
        stared() {
            this.isStared = 0
            this.emails.forEach(email => {
                if (email.isStar) this.isStared++
            })
            return this.isStared
        },
    },
    methods: {
        filtered() {
            this.$emit('filtered', { ...this.filterBy });
        },
    },
    components: {
        emailService,
        emailStatus,
        emailFilter
    }
}