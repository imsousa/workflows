<script setup lang="ts">
import Layout from "../components/Layout.vue";
import TarefaMenu from "../components/TarefaMenu.vue";

const current = 1;

const tarefas = [
    {id: 1, nome: 'tarefa exemplo nº1', data: '31.10.2022 12:00', url:'123/tarefa-exemplo'},
    {id: 2, nome: 'tarefa exemplo nº2', data: '31.10.2022 12:00', url:'133/tarefa-exemplo'},
    {id: 3, nome: 'tarefa exemplo nº3', data: '31.10.2022 12:00', url:'143/tarefa-exemplo'},
    {id: 4, nome: 'tarefa exemplo nº4', data: '31.10.2022 12:00', url:'153/tarefa-exemplo'},
    {id: 5, nome: 'tarefa exemplo nº5', data: '31.10.2022 12:00', url:'163/tarefa-exemplo'},
    {id: 6, nome: 'tarefa exemplo nº6', data: '31.10.2022 12:00', url:'173/tarefa-exemplo'},
    {id: 7, nome: 'tarefa exemplo nº7', data: '31.10.2022 12:00', url:'183/tarefa-exemplo'},
    
]

</script>

<template>
    <main>
        <Layout :titulo="'Tarefas'">

            <!-- Barra de procura -->
            <div class="overflow-hidden shadow-sm sm:rounded-lg ">
                <div class="bg-clblue py-2">
                    <div class="hidden pl-30 space-x-3 sm:-my-px sm:ml-10 sm:flex text-cblue inline-flex items-center pt-1 text-sm font-medium leading-5">
                        <img src="/search.png" class="block h-4 w-auto">
                        <div class="ml-1 border-b-2 bg-clblue border-gray-400 ">
                            <input type="text" v-model="input" placeholder="Palavras chave"
                                class="text-sm w-80 bg-clblue border-none text-gray-800 py-0.5" />
                        </div>
                        <button class="form-button-white">Ir</button>
                    </div>
                </div>
            </div>

            <!-- Topo da "tabela" -->
            <div class="mt-4 border-y-2 py-2 mx-2 border-gray-200">
                <div class="w-[40%] px-5 float-left text-gray-600">Atividade</div>
                <div class="w-[60%] text-gray-600">Disponível desde</div>
            </div>

            <!-- Contentor das tarefas -->
            <div class="py-3 mx-2 h-35 overflow-y-scroll">
                <TarefaMenu v-for="tarefa in tarefas" :tarefa="tarefa"></TarefaMenu>
                <div class="w-[100%] flex flex-center"><q-pagination v-model="current" max="5" direction-links flat color="grey" active-color="clblue" class="w-[100%]"></q-pagination></div>
            </div>

        </Layout>
    </main>
</template>
