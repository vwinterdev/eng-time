<template>
  <header>
    <section class="absolute inset-x-0 top-0 z-50">
      <h2 class="visually-hidden">Навигационный контент</h2>
      <Promo />
      <nav
        aria-label="Основная навигация"
        class="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
      >
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</a
          >
        </div>
      </nav>
    </section>
  </header>
  <slot />
  <ClientOnly>
    <Map />
    <Form />
  </ClientOnly>
</template>

<script setup>
import Promo from "../components/promo.vue";
import Button from "../ui/button.vue";
import Map from "../components/map.vue";
import Form from "../components/form.vue";
const navigation = [
  { name: "О нас", href: "/about" },
  { name: "Цены", href: "/#price" },
  { name: "Акции", href: "/#promotions" },
  { name: "Сертификаты", href: "/#certs" },
  { name: "Отзывы", href: "/#reviews" },
];
</script>
