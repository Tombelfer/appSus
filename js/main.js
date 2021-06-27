// import appHeader from "./apps/book/cmps/appHeader.js"
import { eventBus } from "./apps/book/services/event-bus-service.js"
import { router } from "./router.js"
import appSusHeader from "./cmps/appSus-header.js"
import appSusFooter from "./cmps/appSus-footer.js"
import userMsg from "./cmps/user-msg.js"


const options = {
    el: '#app',
    router,
    template: `
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
        // appFooter,
    }
}
const app = new Vue(options)