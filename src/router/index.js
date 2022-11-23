import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Cadastro from '../components/Cadastro.vue'
import Logged from '../components/Logged.vue'
import Posts from '../components/Posts.vue'
import HotNews from '../components/HotNews.vue'
import ForumItem from '../components/ForumItem.vue'
import PostItem from '../components/PostItem.vue'
import Selling from '../components/Selling.vue'
import Payment from '../components/Payment.vue'



const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
    },
    {
        path: '/logged',
        name: 'logged',
        component: Logged,
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts,
    },
    {
        path: '/hotnews',
        name: 'hotnews',
        component: HotNews,
    },
    {
        path: '/forumitem',
        name: 'forumitem',
        component: ForumItem,
    },
    {
        path: '/postitem',
        name: 'postitem',
        component: PostItem,
    },
    {
        path: '/selling',
        name: 'selling',
        component: Selling,
    },
    {
        path: '/payment',
        name: 'payment',
        component: Payment,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router