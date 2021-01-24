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
        <div id="main" class="border-2 border-gray-400 rounded-md p-3 sm:p-2">
            <h3 class="text-green-600 text-lg font-semibold">Recepten Data</h3>
            <hr>
            <div id="charts" class="flex p-4 items-center">
                <vc-donut :sections="sections" :thickness='30' class="mr-4 sm:mr-8 sm:ml-10 w-1/4 transform sm:scale-60"></vc-donut>
                <div id="bar-chart" class="w-3/4 flex flex-col sm:ml-4">
                    <section v-for="(section,index) in sections" :key="index" class="flex items-center my-2 w-full">
                    <label class="mr-2 text-green-800">{{section.label}}</label>
                    <div class="p-1 text-white font-semibold" :style="{background:section.color,width:section.value+'%'}">{{section.text}}</div>
                    </section>
                </div>
            </div>
        </div>
        <div id="links" class="flex justify-start mt-8 sm:flex-wrap sm:justify-around">
            <div id="item" class="ml-8 sm:m-0 sm:my-4">
                <p>Nieuw Recept Gemaakt?</p>
                <section class="flex justify-between items-center flex-col bg-gray-300 border-2 border-gray-700 p-2 rounded-md">
                    <span class="iconify" data-icon="fa-solid:book" data-inline="false"></span>
                    <router-link to="/new-recipe" class="font-semibold mt-4">Upload uw recept!</router-link>
                </section>
            </div>
            <div id="item" class="ml-8 sm:m-0 sm:my-4">
                <p>Nieuw Recept Noding?</p>
                <section class="flex justify-between items-center flex-col bg-gray-300 border-2 border-gray-700 p-2 rounded-md">
                    <span class="iconify" data-icon="mdi:magnify" data-inline="false"></span>
                    <router-link to="#" class="font-semibold mt-4">Zoek een recept!</router-link>
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
        sections: [
            { value: 75/2,color:'#f5eb25',label:'Recept 1', text:300 },
            { value: 100/4,color:'orange',label:'Recept 2', text:130 },
            { value: 75/2,color:'#00c486',label:'Recept 3', text:100 }
            ]
    }
  }


}
</script>
<style scoped>
.iconify { width: 55px; height: 55px;color:white;stroke: rgb(66, 66, 66); }
</style>
