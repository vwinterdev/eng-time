<template>
    <div @click.stop="isOpen = !isOpen" class="video-widget" :class="{'--open': isOpen }">
        <video ref="videoEl" autoplay muted loop playsinline>
            <source   src="/video.webm" type="video/webm">
            <source   src="/video.mp4" type="video/mp4">
        </video>
    </div>
</template>
  
<script setup>
import { onMounted, ref, shallowRef } from "vue";

const isOpen = ref(false)

const videoEl = shallowRef(null)

onMounted(() => {
    document.addEventListener('click', (event) => {
        isOpen.value = false
        videoEl.muted = true;
        videoEl.play()
    });
})
</script>

