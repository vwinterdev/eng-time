<template>
  <div class="relative isolate">
    <ClientOnly>
      <aside v-motion-fade aria-hidden="true" class="isolate">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
          />
        </div>
      </aside>
    </ClientOnly>

    <div class="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:pt-20 lg:px-8 lg:pt-10">
      <div
        class="sm:min-h-[500px] sm:h-screen sm:max-h-[800px] mx-auto max-w-4xl lg:mx-0 flex lg:max-w-none lg:items-center justify-center"
      >
        <section class="relative w-full shrink-0 max-w-3xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl typing"
          >
            🌟 Успех в английском начинается с English Time!
          </h2>
          <p class="mt-4 text-lg sm:text-lg leading-6 text-gray-600">
            Наши курсы — это ключ к вашему языковому успеху!&nbsp;🗝️ <br />
            Наша школа предлагает
            <strong>качественное обучение&nbsp;🏫</strong> по английскому и
            французскому языкам для всех уровней подготовки — от начального 📘
            до продвинутого 🚀. <br />
            Мы используем
            <strong>современные методики&nbsp;📚,</strong> которые помогают
            нашим студентам <strong>быстро и эффективно&nbsp;🏃‍♂️</strong> освоить
            язык.
          </p>
          <nav
            v-motion-fade
            class="mt-10 flex justify-center flex-column flex-col gap-6 sm:flex-row"
          >
            <Button href="#form" aria-label="Отправить заявку на курсы">
              🚀 Отправить заявку
            </Button>
            <Button href="/about" aria-label="Отправить заявку на курсы">
              👩‍🏫 О школе
            </Button>
            <Button
              href="tel:+79333280497"
              aria-label="Позвонить в школу English Time"
            >
              📱 Позвонить
            </Button>
            <Button
              href="/test"
              aria-label="Пройти тестирование на знание языка"
            >
              📘 Пройти тестирование
            </Button>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../ui/button.vue";
</script>
