Deta Flow:

Router create:
*Router install
views, router folder create(src)
index.js file create(router)
first of all nav item component create(views)

router create:(index.js)
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})

export default router;
import (index.js)
import { createRouter, createWebHistory} from '..vue-router';
import view component Home,About,Contact,Post etc

main.js:
import router from './router'

 const app = createApp(App)
 app.use(router)
 app.mount('#app')
