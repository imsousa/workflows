<script setup lang="ts">

import Layout from "../components/Layout.vue";
const text = '';
</script>

<template>

    <Layout>
<form>
        <a class="text-cblue">input texto</a>
        <input v-model="text" type="text" class="form-input">

        <p class="text-cblue">input password</p>
        <input type="password" class="form-input">
    
        <p>exemplo</p>
        <textarea class="form-input"></textarea>
    
        <button class="form-button" @click="">Submeter</button>
    </form>
    </Layout>
</template>