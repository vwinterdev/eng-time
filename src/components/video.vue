<template>
    <div 
      ref="videoWidget" 
      class="video-widget" 
      draggable="true" 
      v-show="isWidgetVisible"
    >
      <video 
        ref="videoWidgetTag" 
        muted 
        loop 
        playsinline 
        @canplaythrough="onVideoCanPlayThrough" 
        @click="onVideoClick"
      >
        <source type="video/webm" src="/video.webm">
        <source type="video/mp4" src="/video.mp4">
      </video>
    </div>
  </template>
  
  <script setup>
  import {ref, onMounted } from 'vue'
 const isWidgetVisible = ref(false);
    const videoWidget = ref(null);
    const videoWidgetTag = ref(null);

    const onVideoCanPlayThrough = () => {
      isWidgetVisible.value = true; // Показываем блок
      videoWidgetTag.value.play(); // Начинаем воспроизведение
      console.log('Видео готово для воспроизведения без остановок.');
    };

    const onVideoClick = (event) => {
      event.stopPropagation();
      videoWidget.value.classList.add('--open');
      videoWidgetTag.value.currentTime = 0; // Начинаем с начала
      videoWidgetTag.value.play(); // Воспроизводим видео
      videoWidgetTag.value.muted = false;
    };

    const onDocumentClick = () => {
      videoWidget.value.classList.remove('--open');
      videoWidgetTag.value.muted = true;
    };

    // Добавляем обработчик кликов на документ
    onMounted(() => {
      document.addEventListener('click', onDocumentClick);
    });



  </script>
  
  <style scoped>
  .video-widget{
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.4s linear 0s;
    cursor: pointer;
}

.video-widget > video{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}

.video-widget.--open{
    width: 250px;
    height: 320px;
    border-radius: 12px;
}

@media (max-width: 768px) {
    .video-widget{
        right: 10px;
        bottom: 10px;
        width: 120px;
        height: 120px;
    }
    .video-widget.--open{
        width: 250px;
        height: 320px;
    }
}
  </style>