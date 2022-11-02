<script setup>

defineProps(['tarefa', 'data', 'url']);
</script>

<template>
    <div>
        <div class="overflow-hidden border-2 border-clblue shadow-sm sm:rounded-lg py-2 mb-4">
            <a :href="'/tarefa/'+ url" class="block p-2 mx-2 border-gray-200 w-[100%] text-left hover:underline">
                <a class="w-[40%] px-5 float-left">{{ tarefa }}</a>
                <a class="w-[60%]">{{ data }}</a>
            </a>

        </div>
    </div>
</template>