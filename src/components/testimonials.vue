<template>
  <div class="relative isolate pb-32 pt-24 sm:pt-32">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">

        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Что о нас пишут в интернете?</h2>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600"></div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const testimonials = [
  [
    [
      {
        body: 'Прекрасный, добрый учитель, хорошо объясняет. помогает подготовиться к контрольным. очень рады, что записались❤️',
        author: {
          name: 'Василиса Грицкевич',
          handle: '',
          imageUrl:
            'https://i2.photo.2gis.com/images/profile/30258560133227785_b443_96x96.jpg',
        },
      },
      {
        body: 'Великолепно объясняют темы,находят подход к каждому.Занятия проходят в приятной и комфортной обстановке,хочется туда возвращаться снова и снова,Ирина Владимировна самая приятная женщина на свете)',
        author: {
          name: 'Angelina Vladimirovna',
          handle: 'leonardkrasner',
          imageUrl:
            'https://i6.photo.2gis.com/images/profile/30258560128936864_60b2_96x96.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: `Занимаюсь удаленно, так как часто работаю по командировкам и не всегда удобно приезжать в офис. Благодарю Ирину за то что всегда помогает мне готовиться к конференциям, форумам и выступлениям перед зарубежными партерами.
Также всегда рекомендую Ирину как грамотного специалиста, своим коллегам по работе, работать с которой всегда приятно и эффективно.
Обучаюсь в индивидуальном формате по доступной цене, есть с чем сравнить.`,
        author: {
          name: 'Александр Ракицкий',
          handle: '',
          imageUrl:
            'https://i3.photo.2gis.com/images/profile/30258560127508152_1459_96x96.jpg',
        },
      },
      
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: `Помимо школьной программы, которую учитель помогла нам наверстать, Ирина Владимировна направляла мне и дополнительные задания, которые они проходили вместе после уроков. В результате уроки теперь без слёз и истерик. А когда узнали куда теперь можно приходить заниматься после школы, то выбор уже был однозначным и неизменным.
Большое человеческое спасибо!`,
        author: {
          name: 'Юлия Венчакова',
          handle: 'tomcook',
          imageUrl:
            'https://i8.photo.2gis.com/images/profile/30258560127503676_5cc9_96x96.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: `Ребята) Спешу поделиться с вами отзывом о моем обучении с Ириной)) Вы - Лучшая! Ван Лав <3
Со школы английский не удавалось выучить, галопом по европам, только начнешь разбираться, а уже ушли на две темы вперед(
Ирина индивидуально посмотрела мой уровень знаний и мы определили программу по которой будем заниматься)) Очень уютный и комфортный кабинет, все так эстетично, много места и света))`,
        author: {
          name: 'Марина Неволина',
          handle: 'leonardkrasner',
          imageUrl:
            'https://i5.photo.2gis.com/images/profile/30258560127453511_4317_96x96.jpg',
        },
      },
      // More testimonials...
    ],
  ],
  
]
</script>