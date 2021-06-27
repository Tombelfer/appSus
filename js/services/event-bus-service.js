export const eventBus = new Vue();

eventBus.$on('puk',()=>{
    console.log('I Poked!')
})