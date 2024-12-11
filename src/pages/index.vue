<template>
    <h1 class="visually-hidden">
        Английский в Красноярске
    </h1>
    <Hero />
    <Content id="about"/>
    <Price class="mt-20" id="price"/>
    <Promotions  id="promotions"/>
    <InfinityTable class="mb-20"/>
    <Testimonials  id="reviews" />
    <Certs  id="certs" />
    <!-- <Team id="teachers" /> -->
    <ClientOnly>
        <Map />
    </ClientOnly>
    <ClientOnly>
        <Form  />
    </ClientOnly>

    <ClientOnly>
        <VideoWidget />
    </ClientOnly>
</template>

<script setup> 
import Hero from '../components/hero.vue'
import Content from '../components/content.vue'
// import Footer from './components/footer.vue'
// import Team from './components/team.vue'
import Promotions from '../components/promotions.vue'
import Testimonials from '../components/testimonials.vue'
import Price from '../components/price.vue'
import Form from '../components/form.vue'
import Certs from '../components/certs.vue'
import Map from '../components/map.vue'
import InfinityTable from '../components/infinity-table.vue'
import VideoWidget from '../components/video.vue'
</script>

