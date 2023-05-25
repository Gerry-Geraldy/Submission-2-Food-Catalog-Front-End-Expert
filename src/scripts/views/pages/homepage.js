import FoodDBSource from '../../data/fooddb-source'
import { createFoodItemTemplate } from '../templates/template-creator'

const HomePage = {
  async render () {
    return `
    <section class="hero">
    <div class="hero-inner">
      <h1 class="hero-title" tabindex="0">
        Ragam Kuliner Nusantara yang Menggugah Selera!
      </h1>
      <p class="hero-tagline" tabindex="0">
        Jelajahi ragam kuliner Nusantara yang menggugah selera di Food Hub,
        menampilkan makanan khas dan petualangan kuliner di seluruh Indonesia.
      </p>
    </div>
  </section>
  <section class="content">
    <article class="headline">
      <figure
        class="headline-figure"
        aria-label="Seorang Koki yang memasak"
        tabindex="0"
      >
        <figcaption tabindex="0">
          Food.hub May 2023 Infographic, 100k Members
        </figcaption>
      </figure>
      <div class="headline-content">
        <h1 class="headline-title" tabindex="0">About</h1>
        <p class="headline-description" tabindex="0">
          Selamat datang di Food Hub, website yang mengajak Anda untuk
          menjelajahi ragam makanan di Indonesia. Kami adalah pusat
          informasi kuliner yang menawarkan panduan lengkap tentang hidangan
          tradisional, rekomendasi restoran terbaik, dan petualangan kuliner
          yang tak terlupakan di seluruh nusantara. Dari makanan jalanan
          yang lezat hingga masakan khas daerah yang autentik, kami hadir
          untuk memperkenalkan Anda pada kekayaan cita rasa dan keunikan
          budaya kuliner Indonesia. Serta memberikan inspirasi dan
          pengetahuan bagi para pecinta makanan untuk menjelajahi dan
          merasakan kelezatan dari setiap sudut negeri ini. Selamat
          menikmati perjalanan kuliner Anda bersama Food Hub!
        </p>
        <button
          class="headline-button"
          aria-label="Tekan Enter Untuk Mengetahui info lebih lanjut"
        >
          Read More
        </button>
      </div>
    </article>
    <div class="posts">
      <h1 class="post-title" tabindex="0">More Foods</h1>
      <div class="post-item" id="postsItem"></div>
    </div>
  </section>
            `
  },

  async afterRender () {
    const foods = await FoodDBSource.homePage()
    const foodsContainer = document.querySelector('#postsItem')
    foods.forEach((food) => {
      foodsContainer.innerHTML += createFoodItemTemplate(food)
    })
  }
}

export default HomePage
