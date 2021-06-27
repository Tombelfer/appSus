import appSusMenu from "./appSus-menu.js"
export default {
    template: `
            <header class="app-header main-layout flex space-between align-center">
                <div class="logo">
                    <router-link to="/" class="logo"><img src="img/apps/klipartz.com.png" alt=""></router-link>
                </div>
                <nav class="nav-bar">
                        <appSusMenu></appSusMenu>
                </nav>
            </header>
    `,
    components: {
        appSusMenu
    }
}