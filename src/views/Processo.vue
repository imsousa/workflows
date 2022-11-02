<script setup>
import { def } from "@vue/shared";
import Layout from "../components/Layout.vue";

const form = {
    multiselect: [],
};

const options = ['option 1', 'option 2', 'option 3', 'option 4'];

</script>

<template>
    <main>
        <Layout :titulo="'Título do processo'">

            <input type="text" placeholder="type text" class="my-2 form-input">

            <input type="password" placeholder="type password" class="my-2 form-input">

            <select class="form-input">
                <option> opção 1 </option>
                <option> opção 2 </option>
                <option> opção 3 </option>
            </select>

            <textarea placeholder="textarea" class="form-input"></textarea>

            <!--Multiselect-->
            <div v-if="form.multiselect.length"
                class=" w-full px-4 border bg-white border-gray-300 text-gray-600 sm:rounded-lg ">
                <a v-for="alt in form.multiselect" v-bind:key="alt">{{ alt }}; </a>
            </div>
            <div v-else class=" w-full px-4 border bg-white border-gray-300 text-gray-600 sm:rounded-lg "> Por favor
                selecione
                pelo menos uma opção. </div>
            <button @click="showAlts = !showAlts" type="button" class="mt-2 form-button-white"> Selecionar </button>

            <div v-show="showAlts" class=" fixed top-0 h-screen w-screen left-0 right-0 bg-gray-600 opacity-30 "></div>
            <div v-show="showAlts" class=" fixed grid top-0 h-screen w-screen left-0 right-0 ">
                <div class=" m-auto h-fit py-5 px-20 border border-2 border-clblue bg-white sm:rounded-lg opacity-100 ">
                    <a class=" mb-3 text-cblue inline-block border-b-2 border-b-gray-400 ">
                        <h1>Exemplo</h1>
                    </a>
                    <div
                        class=" overflow-y-scroll scrollbar scrollbar-thumb-gray-300 text-sm scrollbar-track-gray-100 scrollbar-thumb-rounded-full ">
                        <div v-for="alt in options" v-bind:key="alt">
                            <input type="checkbox" v-model="form.multiselect" :id="alt" :name="alt"
                                :key="alt" :value="alt" />
                            <label :for="alt" class="text-cblue ml-1 mb-2 text-sm"> {{ alt }}</label>
                        </div>
                    </div>
                    <button @click="showAlts = !showAlts" type="button"
                        class=" h-fit mt-3 mx-auto border border-2 border-gray-400 form-button "> Confirmar </button>
                </div>
            </div>
            <!--Fim do Multiselect-->

        </Layout>
    </main>
</template>

<script>
export default{
    data: function() {
        return {
            showAlts:false,
        } ;
    },
    
}
</script>