<script setup lang="ts">
import { ref } from 'vue'

const currentTime = "10:00 pm"

// Update currentTime logic here (e.g., setInterval)
</script>

<template>
  <div>
    <div class="container">
      <div class="row fill-page">
        <div class="col-4 top-0 start-0 p-3">
          <p class="mb-0">Image by</p>
          <p class="mb-0">creator name here</p>
        </div>
        <div class="col-4">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-auto">
              <h1 class="text-center time-size">{{ currentTime }}</h1>
            </div>
          </div>
        </div>
        <div class="col-4">

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
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
