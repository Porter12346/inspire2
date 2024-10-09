<script setup lang="ts">
import { imageService } from '@/services/ImageService.js';
import { quoteService } from '@/services/QuoteService.js';
import { weatherService } from '@/services/weatherService.js';
import Pop from '@/utils/Pop.js';
import { onMounted, ref } from 'vue'

onMounted(() => {
  getBackgroundImage()
  getWeather()
  getQuote()
})

const currentTime = "10:00 pm"

const bgImage = ref()
const temp = ref()
const quote = ref()
// Update currentTime logic here (e.g., setInterval)

async function getBackgroundImage() {
  try {
    const image = await imageService.getBackgroundImage()
    bgImage.value = image
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getWeather() {
  try {
    const weather = await weatherService.getWeather()
    temp.value = weather
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getQuote() {
  try {
    const quote = await quoteService.getQuote()
    console.log(quote)
    quote.value = quote
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="background-image" :style="{ backgroundImage: bgImage ? `url(${bgImage.imgUrl})` : 'none'}">
    <div class="container-fluid text-light">
      <div class="row fill-page"> 
        <div class="col-4 top-0 start-0 p-3">
          <p class="mb-0 text">Image by</p>
          <p class="mb-0"> {{ bgImage?.author }} </p>
        </div>

        <div class="col-4 h-100 d-flex flex-column justify-content-between">
          <p></p>
          <div class="row justify-content-center align-items-center">
            <div class="col-12">
              <h1 class="text-center time-size text-shadow">{{ currentTime }}</h1>
            </div>
          </div>
          <div>
            <p>inspiration</p>
          </div>
        </div>

        <div class="col-4 text-end fs-3">
          <div>
          <p class="mb-0 text">Temp</p>
          <p class="mb-0 text px-2">{{ temp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.fill-page {
  height: 100vh;
}

.time-size {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.background-image {
  background-size: cover;
  background-position: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

</style>