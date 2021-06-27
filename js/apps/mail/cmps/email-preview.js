import longText from "./long-text.js"
export default {
    props: ['email','page'],
    template: `
    <div class="email-container">
        <router-link :to="'/mail/'+email.id" class="base">
            <div class="info" >
                <p :class="isRead" >From: {{email.emailfrom}}</p>
                <p :class="isRead" >{{email.emailSubject}} </p>
            </div>
            <div class="body">
                <longText :email="email"></longText>
                <p >{{showTime}}</p>
            </div>    
        </router-link>
        <div class="options">

            <img :src="changeReadImg" alt="" @click="toggleStar(email.id)" class="star">

            <p>Mark as read</p>

            <input type="checkbox" id="email.id" v-model="email.isRead" @click="toggleRead(email.id)" >

                    <div class="delete" @click="remove(email.id)">
                        <img src="img/apps/mail/app/delete_black_20dp.png" alt="">
                    </div>
        </div>
    </div>
    `,
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId)
        },
        update(emailId) {
            this.$emit('update', emailId)
        },
        toggleStar(emailId) {
            this.email.isStar = !this.email.isStar
            this.update(emailId)
        },
        toggleRead(emailId) {
            this.email.isRead = !this.email.isRead
            this.update(emailId)
        }
    },
    computed: {
        isRead() {
            if (!this.email.isRead) {
                return 'un-read'
            }
        }, changeReadImg() {
            if (this.email.isStar) {
                return 'img/apps/mail/cmps/fullStar.png'
            } else if (!this.email.isStar) {
                return 'img/apps/mail/cmps/empStar.png'
            }
        },
        showTime() {
            let time = this.email.sentAt;
            time = new Date(time);
            let hour = time.getHours();
            let minutes = time.getMinutes();

            if (hour < 10) hour = '0' + hour;
            if (minutes < 10) minutes = '0' + minutes;
            time = `${hour}:${minutes}`;
            
            if (hour > 12) return time + ' PM';
            return time + ' AM';
        },
    },
    components: {
        longText
    }
}