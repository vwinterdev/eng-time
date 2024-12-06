<template>

    <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
          <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <p class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Тестирование</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{props.test.title}}</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">{{props.test.description}}</p>
          </div>
          <div class="mx-auto mt-10 ">
            <div class="flex flex-col gap-10">

                <TestSection 
                    v-for="(question, index) of props.test.questions"
                    :title="`${index + 1}) ${question.title}`"
                    :variants="question.variants"
                    @answer="question.giveAnswer($event)"
                    :key="index"
                />
            </div>

            
            <div class="mt-20">
                <button v-if="!isOpen" type="button" @click="isOpen = true" class="mt-20 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Проверить
                </button>
                <div v-if="isOpen" class="mt-6 text-xl leading-8 text-gray-700">
                    {{  result }}
                </div>
            </div>
          </div>
        </div>
      </div>
   

</template>
<script setup>
import { computed, ref } from 'vue'
import TestSection from './test-section.vue'

const isOpen = ref(false)

const props = defineProps({
    test: { default: null, type: Object }
})
const result = computed(() => {
    const answers = props.test.questions.filter(({ isCorrect }) => isCorrect)
    return `правильно ${answers.length} из ${props.test.questions.length} `
})
</script>
