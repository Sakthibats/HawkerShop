// Import the components you want to define routes for.
import PageContent from './components/PageContent.vue'
import orders from './components/Orders.vue'
import modify from './components/Modify.vue'
import dash from './components/Dashboard.vue'


export default [
  { path: '/', name: 'page', component: PageContent },
  { path: '/orders', name: 'order', component: orders },
  { path: '/modify/:uid', name: 'modify', component: modify, props:true },
  { path: '/dash', name: 'dashb', component: dash }
]