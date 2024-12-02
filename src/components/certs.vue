<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div class="mx-auto max-w-xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900">Награды и сертификаты</h2>
            </div>
            <div class="mx-auto mt-12 grid max-w-sm grid-cols-2 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div class="sm:flex-shrink-0">
                  <a :href="incentive.imageSrc">
                    <div>
                        <img loading="lazy" class="rounded-xl shadow-2xl ring-1 ring-gray-900/10" :src="incentive.imageSrc" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const incentives = [
    {
        name: '1',
      imageSrc: '/cert1.jpg',
      
    },
    {
        name: '3',
imageSrc: '/cert3.jpg',

},
{
    name: '2',
imageSrc: '/cert2.jpg',

},
{
    name: '4',
imageSrc: '/cert4.jpg',

},
  ]
  </script>