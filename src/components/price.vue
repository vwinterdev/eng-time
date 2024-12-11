<template>
 
    <section class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Выберите свой курс и начните учиться уже сегодня! 📚✨
      </h2>

        <div class="relative -mx-8">

          <table class="w-full table-auto border-separate border-spacing-x-8 text-left sm:table-fixed">
            <tbody>
              <template v-for="section in sections" :key="section.name">
                <tr class="mt-10">
                  <th scope="colgroup" colspan="4" :class="'pb-4 pt-10 text-sm font-semibold leading-6 text-gray-900'">
                    {{ section.name }}
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                  </th>
                </tr>
                <tr v-for="feature in section.features" :key="feature.name">
                  <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                    {{ feature.name || '&nbsp;' }}
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                  </th>
                  <td v-for="tier in tiers" :key="tier.id" class="px-2 py-4 xl:px-8">
                    <div v-if="typeof feature.tiers[tier.name] === 'string'" class="text-center text-sm leading-6 text-gray-500 whitespace-nowrap">
                      {{ feature.tiers[tier.name] }}
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      
    </section>

</template>

<script setup>
const tiers = [
  {
    name: 'time',
    id: 'tier-time',
    href: '#',
    priceMonthly: '$9',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'price',
    id: 'tier-price',
    href: '#',
    priceMonthly: '$29',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  }
]

const sections = [
  {
  name: 'Английский 🇬🇧',
  features: [
    { name: 'Занятия в группе 👥', tiers: { time: '40 мин', price: '3800 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '4300 ₽' } },
    { name: 'Индивидуальные занятия 👤', tiers: { time: '40 мин', price: '5300 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '5900 ₽' } },
    { name: 'Подготовка к ЕГЭ/ОГЭ 🎓', tiers: { time: '40 мин', price: '4500 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '5300 ₽' } },
  ],
},
{
  name: 'Французский 🇫🇷',
  features: [
    { name: 'Занятия в группе 👥', tiers: { time: '40 мин', price: '4000 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '4500 ₽' } },
    { name: 'Индивидуальные занятия 👤', tiers: { time: '40 мин', price: '5300 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '5900 ₽' } },
    { name: 'Подготовка к ЕГЭ/ОГЭ 🎓', tiers: { time: '40 мин', price: '4800 ₽' } },
    { name: '', tiers: { time: '60 мин', price: '5500 ₽' } },
  ],
},
{
  name: 'Дополнительно 💡',
  features: [
    { name: 'Базовый курс 🏫', tiers: { time: '16 уроков', price: '9900 ₽', other: '2 месяца 16 занятий 2 теста' } },
    { name: 'Английский для отдыха 🏖️', tiers: { time: '12 уроков', price: '8500 ₽', other: '2 месяца 16 занятий 2 теста' } },
  ],
},
]
</script>