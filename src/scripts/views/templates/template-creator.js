import CONFIG from '../../globals/config'

const createFoodDetailTemplate = (food) =>
  `
<h2 tabindex="0" class="food-title">${food.name}</h2>
<img class="food-poster" src="${CONFIG.BASE_IMAGE_URL + food.pictureId}" alt="${food.name}" />
 <div class="food-info">
  <h3>Information</h3>
  <h4>Rating</h4>
  <p>⭐️${food.rating}</p>
  <h4>City</h4>
  <p>${food.city}</p>
</div>
<div class="food-description">
  <h4>Description</h4>
  <p>${food.description}</p>
</div>
  <div class="food-menu">
    <div class="menu"><ol><h3 tabindex="0">🍔Menu Foods:</h3>${food.menus.foods.map(food => `<li>${food.name}</li>`).join('')}</ol></div>
    <div class="menu"><ol><h3 tabindex="0">🍹Menu Drinks:</h3>${food.menus.drinks.map(food => `<li>${food.name}</li>`).join('')}</ol></div>
  </div>
<div class="food-review">
<h4>Customer Review</h4>
${food.customerReviews.reduce((show, value) => show.concat(`
<div class="review">
 <p>NAMA: ${value.name}</p>
 <p>DATE: ${value.date}</p>
 <p>KOMENTAR: ${value.review}</p>
 </div>
`), '')}
</div>
`

const createFoodItemTemplate = (food) => `
      <div href="#" class="card">
      <div class="card-image">
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + food.pictureId}" alt="${food.name}">   
      <p tabindex="0" class="card-city">${food.city}</p>
      <p tabindex="0" class="card-rating" aria-label="food rating ${
        food.rating
      }">⭐️${food.rating} </p>
      </div>
      <div class="card-description">
      <h3 tabindex="0" class="card-title"><a href="/#/detail/${food.id}">${
  food.name
}</a></h3>
      <p tabindex="0" class="description">${food.description}</p>
      </div>
      </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createFoodDetailTemplate,
  createFoodItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
