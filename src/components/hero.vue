<template>
  <div class="">
    <header class="absolute inset-x-0 top-0 z-50">
      <Promo  />
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1"></div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
    <main>
      <div class="relative isolate">
        <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
          <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="overflow-hidden">




          <div class=" mx-auto max-w-7xl px-4 pb-10 pt-20 sm:pt-20 lg:px-8 lg:pt-10">
            <div class="sm:min-h-[500px] sm:h-screen sm:max-h-[800px] mx-auto max-w-4xl  lg:mx-0 flex lg:max-w-none lg:items-center justify-center">
              <div class="relative w-full shrink-0 max-w-3xl text-center">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl typing">
                  🌟 Успех в английском начинается с English Time!
                </h1>
                <p class="mt-4 text-lg sm:text-lg leading-6 text-gray-600  ">
                  Наши курсы — это ключ к вашему языковому успеху!&nbsp;🗝️ <br />
                  Наша школа предлагает <strong>качественное обучение&nbsp;🏫</strong> по английскому и французскому языкам для всех уровней подготовки — от начального 📘 до продвинутого 🚀. <br />
                  Мы используем <strong>современные методики&nbsp;📚,</strong> которые помогают нашим студентам <strong>быстро и эффективно&nbsp;🏃‍♂️</strong>  освоить язык. 
                </p>
                <div class="mt-10 flex justify-center flex-column flex-col gap-6 sm:flex-row">
                  <Button v-motion-fade href="#form">
                    🚀 Отправить заявку
                  </Button>
                  <Button v-motion-fade href="tel:+79333280497">
                    📱 Позвонить
                  </Button>
                  <Button v-motion-fade href="/test">
                    📘 Пройти тестирование
                  </Button>
                </div>
              </div>




              <!-- <div class="mt-14 flex justify-between sm:justify-start sm:pl-20 lg:mt-10 lg:pl-0 gap-8">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative element">
                    <img src="/promo/1.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative element5">
                    <img src="/promo/2.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative element3">
                    <img src="/promo/3.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative element2">
                    <img src="/promo/4.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative element4">
                    <img src="/promo/5.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog } from '@headlessui/vue'
import Promo from './promo.vue'
import Button from '../ui/button.vue'
const navigation = [
  { name: 'О нас', href: '#about' },
  { name: 'Цены', href: '#price' },
  { name: 'Акции', href: '#promotions' },
  { name: 'Сертификаты', href: '#certs' },
  { name: 'Отзывы', href: '#reviews' },
]

const mobileMenuOpen = ref(false)
</script>

