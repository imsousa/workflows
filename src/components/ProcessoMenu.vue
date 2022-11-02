<script setup>

defineProps(['processo', 'data', 'url']);
</script>

<template>
    <div>
        <div class="overflow-hidden border-2 border-clblue shadow-sm sm:rounded-lg py-2 mb-4">
            <a :href="'/processo/'+ url" class="block p-2 mx-2 border-gray-200 w-[100%] text-left hover:underline">
                <a class="w-[40%] px-5 float-left">{{ processo }}</a>
                <a class="w-[60%]">{{ data }}</a>
            </a>

        </div>
    </div>
</template>