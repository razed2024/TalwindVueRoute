import { createRouter, createWebHistory } from 'vue-router';
// Define Route component by IMporting
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';

//Define Routes, Each route should map to a component

const routes =[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {

        path:'/contact',
        name:'Contact',
        component:Contact
    },
        
{
    path:'/services',
    name:'services',
    component:Services  
}
    
]

//Create the router instance and pass the routes option

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})

export default router;