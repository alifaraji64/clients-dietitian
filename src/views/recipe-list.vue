<template>
  <main class="flex min-h-screen sm:pb-24">
    <SideBar />

    <section class="bg-gray-100 w-10/12 p-4 sm:w-full">
        <header class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-green-800 sm:text-2xl">Recepten</h1>
            <div id="search-box" class="w-2/5 border-gray-400 border-2 rounded-2xl ml-40 flex h-8 sm:h-6 sm:mr-1 sm:ml-4">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
            <div id="icons" class="-mr-16 z-10 sm:m-0 flex items-center ">
                <i class="far fa-bell fa-2x cursor-pointer sm:text-lg"></i>
                <div id="profile-image" class="cursor-pointer w-10 p-0.5 rounded-md bg-blue-400 flex justify-center items-end ml-4 sm:ml-2 sm:w-8 sm:p-0">
                    <i class="fas fa-user-alt fa-2x text-white sm:text-lg"></i>
                </div>
            </div>
        </header>
        <div id="links" class="flex justify-start text-white my-8">
            <router-link to="/new-recipes" class="bg-green-500 mx-2 p-2 rounded-xl">Nieuw Recept</router-link>
            <router-link to="/recipe-list" class="bg-green-500 mx-2 p-2 rounded-xl">Mijn Recepten</router-link>
            <router-link to="#" class="bg-green-500 mx-2 p-2 rounded-xl">Recept Promoten</router-link>
        </div>
        <div id="main" class="rounded-md p-2 sm:p-2">
            <div id="item" v-for="k in 4" :key="k" class=" my-2 w-3/4 border-2 border-gray-400 flex items-center p-2 rounded-lg sm:w-full">
                <section id="image" class="m-2">
                    <h2 class="text-2xl sm:text-xl text-gray-500 border-2 border-gray-300 p-2">IMG</h2>
                </section>
                <section id="text" class="ml-3">
                    <h2 class="text-3xl text-gray-600 sm:text-2xl">Recept titel</h2>
                    <p class="text-gray-500 mt-1">Allergieen, Keuken, Type</p>
                </section>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 w-1/12 text-center sm:hidden">
    </section>

  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
export default {
  name: 'recipes',
  components: {
    SideBar
  },
  data(){
    return{
    }
  }


}
</script>
<style scoped>
.iconify { width: 55px; height: 55px;color:white;stroke: rgb(66, 66, 66); }
</style>
