<template>
    <div>
        <p class="text-sm font-semibold leading-6 text-gray-900">{{title}}</p>
        <div class="mt-6 space-y-6 ">
            <div v-for="(variant, index) in variants" :key="index" class="flex items-center ">
                <input :id="title + index" v-model="currentAnswer" :value="index" :name="title" type="radio"  class="h-4 w-4 border-gray-300 cursor-pointer  text-indigo-600 focus:ring-indigo-600" />
                <label :for="title + index" class="ml-3 block text-sm cursor-pointer font-medium leading-6 text-gray-900">{{ variant }}</label>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    title: { default: '', type: String },
    variants: { default: () => [], type: Array }
})
const emit = defineEmits(['answer'])

const currentAnswer = ref(null)

watch(currentAnswer, () => {
    emit('answer',currentAnswer.value)
    console.log(currentAnswer.value)
})

</script>