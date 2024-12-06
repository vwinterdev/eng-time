<template>


    <Test v-if="test" :test="test" />
    <div v-else>
        loading...
    </div>


</template>
<script setup>
import { onMounted, ref } from 'vue'
import Test from '../components/test.vue'
const test = ref(null)

class QuizItem {
    isCorrect = false
    currentAnswer = ''

    constructor({ title, variants, correctAnswerIndex }){
        this.title = title
        this.variants = variants
        this.correctAnswerIndex = correctAnswerIndex
    }

    giveAnswer(index){
        this.currentAnswer = this.variants[index]
        this.isCorrect = index === this.correctAnswerIndex
    }
    
}

onMounted(async () => {
    const res = await fetch('/quiz/1.json')
    const resJson = await res.json()
    test.value = {
        ...resJson,
        questions: resJson.questions.map((question) => new QuizItem(question))
    }
})
</script>