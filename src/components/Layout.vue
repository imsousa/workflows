<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView, useRoute } from "vue-router";
import ApplicationLogo from "./ApplicationLogo.vue";
import NavLink from "./NavLink.vue";
import Dropdown from "./Dropdown.vue";
import ResponsiveNavLink from "./ResponsiveNavLink.vue";

const showingNavigationDropdown = ref(false);

defineProps(["titulo"]);
</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-hidden bg-gray-100">
            <nav class="bg-white overflow-hidden border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <a href="/">
                                    <ApplicationLogo class="block h-9 w-auto" />
                                </a>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink :href="'/'" :active="useRoute().path == '/'">
                                    Início
                                </NavLink>
                                <NavLink :href="'/processos'" :active="useRoute().path == '/processos'">
                                    Processos
                                </NavLink>
                            </div>

                        </div>



                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <button type="button" align="right"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                    Sair
                                </button>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path
                                        :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }"
                    class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="'/'" :active="useRoute().path">
                            Início
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="'/processos'" :active="useRoute().path">
                            Processos
                        </ResponsiveNavLink>
                    </div>

                    <div class="float-left pl-20">Pesquisar
                        <input type="text" v-model="input" placeholder="Palavras chave"
                            class="ml-3 w-60 text-sm text-gray-800 bg-clblue border-transparent py-0.5" />
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">username</div>
                            <div class="font-medium text-sm text-gray-500">username</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="'/logout'" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>


            <div class="py-6 px-24 bg-clblue h-screen overflow-hidden">
                <!-- bg branco -->
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class=" border-b border-gray-200 overflow-hidden shadow-sm sm:rounded-lg ">
                        <div class="px-6 pt-6 pb-0 bg-white h-70">
                            <!-- topo da página: breadcrumbs e título -->
                            <div class="text-gray-600 text-xs">breadcrumbs / breadcrumbs</div>
                            <h2 class="font-semibold text-xl text-cblue leading-tight py-3 ml-4">
                                {{ titulo }}
                            </h2>

                            <!-- conteúdo -->
                            <div class="pt-3 border-t-2 border-gray-200">
                                <div class="px-8 w-full">

                                    <!-- Page Content -->
                                    <main>
                                        <slot />
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


