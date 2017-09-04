import Hello from './components/Hello.vue'
import World from './components/World.vue'

const routes = [
    {path: '/', name: 'root', component: Hello},
    {path: '/world', name: 'world', component: World}
]

export default routes;