import UrlParser from '../../routes/url-parser'
import FoodDBSource from '../../data/fooddb-source'
import { createFoodDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const DetailPage = {
  async render () {
    return `
          <div id="detail-food" class="food"></div>
          <div id="likeButtonContainer"></div>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const food = await FoodDBSource.detailFood(url.id)
    const foodContainer = document.querySelector('#detail-food')
    foodContainer.innerHTML = createFoodDetailTemplate(food)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      food: {
        id: food.id,
        name: food.name,
        description: food.description,
        city: food.city,
        pictureId: food.pictureId,
        menus: food.menus,
        rating: food.rating,
        customerReviews: food.customerReviews
      }
    })
  }
}

export default DetailPage
