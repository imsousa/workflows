<script setup lang="ts">
import Layout from "../components/Layout.vue";

const props = defineProps(["tarefa"]);

</script>

<template>
    <main>
        <Layout :titulo="'Nome da tarefa'">
            Teste
        </Layout>
    </main>
</template>
