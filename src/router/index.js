import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermosDeServico from '../views/TermosDeServico.vue'
import PoliticaDePrivacidade from '../views/PoliticaDePrivacidade.vue'
import TrabalheConosco from '../views/TrabalheConosco.vue'
import Contato from '../views/Contato.vue'
import DetalhesDoJogo from '../views/DetalhesDoJogo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/termos-de-servico',
      name: 'termos-de-servico',
      component: TermosDeServico
    },
    {
      path: '/politica-de-privacidade',
      name: 'politica-de-privacidade',
      component: PoliticaDePrivacidade
    },
    {
      path: '/trabalhe-conosco',
      name: 'trabalhe-conosco',
      component: TrabalheConosco
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/detalhes-do-jogo/:thumb/:title/:steamRatingText/:steamRatingPercent/:normalPrice/:salePrice',
      name: 'detalhes-do-jogo',
      component: DetalhesDoJogo
    }
  ]
})

export default router
