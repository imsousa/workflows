<script setup>
import { computed } from 'vue';

const props = defineProps(['href', 'active']);

const classes = computed(() => props.active
    ? 'inline-flex px-3 items-center w-17 pt-1 border-b-2 border-clblue bg-clblue text-sm font-medium leading-5 text-strong-blue focus:outline-none focus:border-cblue transition  duration-150 ease-in-out'
    : 'inline-flex items-center w-17 px-3 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-strong-blue hover:border-cblue focus:outline-none  focus:border-cblue transition duration-150 ease-in-out'
);
</script>

<template>
    <a :href="href" :class="classes">
        <slot />
    </a>
</template>