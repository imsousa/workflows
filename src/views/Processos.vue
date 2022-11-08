<script setup lang="ts">
import Layout from "../components/Layout.vue";
import ProcessoMenu from "../components/ProcessoMenu.vue";

</script>

<template>
    <main>
        <Layout :titulo="'Iniciar Novo Processo'">

            <!-- Barra de procura -->
            <div class="overflow-hidden shadow-sm sm:rounded-lg ">
                <div class="bg-clblue py-2">
                    <div class="hidden pl-30 space-x-3 sm:-my-px sm:ml-10 sm:flex text-cblue inline-flex items-center pt-1 text-sm font-medium leading-5">
                        <img src="/search.png" class="block h-4 w-auto">
                        <div class="ml-1 border-b-2 bg-clblue border-gray-400 ">
                            <input type="text" v-model="input" placeholder="Palavras chave" class="text-sm w-80 bg-clblue border-none text-gray-800 py-0.5" />
                        </div>
                        <button class="form-button-white">Ir</button>
                    </div>
                </div>
            </div>

            <!-- Topo da "tabela" -->
            <div class="mt-4 border-y-2 py-2 mx-2 border-gray-200">
                <div class="w-[100%] px-5 text-gray-600">Processos</div>
            </div>

            <!-- Contentor das tarefas -->
            <div class="py-3 mx-2 h-60">
                <ProcessoMenu :processo="'nome do processo'" :url="'123/processo-exemplo'"> </ProcessoMenu>
                <ProcessoMenu :processo="'nome do processo'" :url="'245/processo-exemplo'"> </ProcessoMenu>
            </div>
            

        </Layout>
    </main>
</template>
