import { eventBus } from "./js/apps/book/services/event-bus-service.js"
import { router } from "./js/router.js"
import appSusHeader from "./js/cmps/appSus-header.js"
import appSusFooter from "./js/cmps/appSus-footer.js"
import userMsg from "./js/cmps/user-msg.js"


const options = {
    el: '#app',
    router,
    template: `
    ין
    <section class="app-container">
        <userMsg></userMsg>
    <appSusHeader class="main-header"></appSusHeader>
        <router-view class="main-app"></router-view>
    <appSusFooter class="main-footer"></appSusFooter>
    </section>
    `,
    components: {
        eventBus,
        appSusFooter,
        appSusHeader,
        userMsg
    }
}
const app = new Vue(options)
