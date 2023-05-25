import FavoriteFoodIdb from '../../data/favorite-movieidb'
import { createFoodItemTemplate } from '../templates/template-creator'

const FavoritePage = {
  async render () {
    return `
              
              <section class="list-content">
                <div class="container">
                  <h2>Your Liked Food</h2>
                  <div class="post-item" id="postsItem"></div>
                </div>
              </section>
            `
  },

  async afterRender () {
    const foods = await FavoriteFoodIdb.getAllFood()
    const foodContainer = document.querySelector('#postsItem')

    foods.forEach((food) => {
      foodContainer.innerHTML += createFoodItemTemplate(food)
    })
  }
}

export default FavoritePage
