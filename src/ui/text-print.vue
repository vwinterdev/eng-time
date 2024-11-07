<template>
    <span :class="elClass">
        {{  result  }}
    </span>
</template>

<script setup>
import { computed, onMounted, ref, shallowRef, watch } from "vue"

const props = defineProps({
    text: { default: '', type: String },
    delay: { default: 100, type: Number },
    delayClose: { default: 2000, type: Number },
})

const sliceTarget = ref(0)
const result = computed(() => props.text.slice(0, sliceTarget.value))
const length = computed(() => props.text.length )
const interval = shallowRef(null)
const elClass = ref('print-effect')

onMounted(() => {
    interval.value = setInterval(() => {
        sliceTarget.value++
    }, 100)
})

watch(sliceTarget, (newValue) => {
    if(newValue > length.value){
        clearInterval(interval.value)
        setTimeout(() => {
            elClass.value = ''
        }, props.delayClose)
    }
})
</script>
<style scoped>
.print-effect::after{
    content: "|";
    animation: print  1s linear infinite;
}

@keyframes print {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>