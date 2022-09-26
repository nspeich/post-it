import { createRouter, createWebHistory } from 'vue-router';
import AddPostIt from '../components/AddPostIt.vue';
import PostItPanel from '../components/PostItPanel.vue';
import ModifyPostIt from '../components/ModifyPostIt.vue';

const routes = [
    {
        path: '/',
        name: 'PostItPanel',
        component: PostItPanel
      },
  {
    path: '/addPostIt',
    name: 'AddPostIt',
    component: AddPostIt
  },
  {
    path: '/modifyPostIt',
    name: 'ModifyPostIt',
    component: ModifyPostIt
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
