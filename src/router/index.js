import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import RulesView from '../views/RulesView.vue'
import SettingsView from '../views/SettingsView.vue'
import OptionsView from '../views/OptionsView.vue'
import GameView from '../views/GameView.vue'
import TimerView from '../views/TimerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/options',
      name: 'options',
      component: OptionsView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/timer',
      name: 'timer',
      component: TimerView
    }
  ]
})

export default router
