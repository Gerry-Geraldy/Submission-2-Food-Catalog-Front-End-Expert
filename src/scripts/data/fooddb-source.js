import API_ENDPOINT from '../globals/api-endpoint'

class FoodDBSource {
  static async homePage () {
    const response = await fetch(API_ENDPOINT.HOMEPAGE)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailFood (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default FoodDBSource
