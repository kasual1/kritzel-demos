import { createRouter, createWebHistory } from 'vue-router'
import EditorPage from './pages/EditorPage.vue'
import MultiEditorPage from './pages/MultiEditorPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: EditorPage },
    { path: '/multi-editor', component: MultiEditorPage },
  ],
})
