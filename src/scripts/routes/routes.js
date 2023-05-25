import HomePage from '../views/pages/homepage'
import FavoritePage from '../views/pages/favorite-page'
import DetailPage from '../views/pages/detail-page'

const routes = {
  '/': HomePage,
  '/homepage': HomePage,
  '/favorite-page': FavoritePage,
  '/detail/:id': DetailPage
}

export default routes
