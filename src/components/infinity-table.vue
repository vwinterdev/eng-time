<template>
    <div class="gallery-container">
        <div class="gallery-wrapper">
            <a :href="`/images/${i}.webp`" v-for="i of 13" :key="i">
                <div class="gallery-item">
                    <img :src="`/images/${i}.webp`" :alt="`Image ${i}`">
                </div>
            </a>
            <a :href="`/images/${i}.webp`" v-for="i of 13" :key="i">
                <div class="gallery-item">
                    <img :src="`/images/${i}.webp`" :alt="`Image ${i}`">
                </div>
            </a>
            <a :href="`/images/${i}.webp`" v-for="i of 13" :key="i">
                <div class="gallery-item">
                    <img :src="`/images/${i}.webp`" :alt="`Image ${i}`">
                </div>
            </a>
        </div>
      </div>
</template>
<script setup>


</script>
<style scoped>
    .gallery-container {
      display: flex;
      overflow: hidden;
      width: 100%;
    }

    .gallery-wrapper {
      display: flex;
      animation: scroll 200s linear infinite;
    }

    .gallery-item {
      width: 300px;
      height: 280px;
      margin-right: 10px;
      flex-shrink: 0;
      transition: transform 0.3s ease;
        
      position: relative;
      
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      object-fit: cover;
      
    }

    /* Анимация прокрутки */
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  </style>