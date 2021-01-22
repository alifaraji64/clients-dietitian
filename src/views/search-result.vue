<template>
  <main class="flex min-h-screen">
    <SideBar />
    <section class="bg-gray-100 w-10/12 p-4 sm:w-full sm:p-2">
        <header class="flex items-center">
            <h1 class="text-3xl font-bold text-green-800">Patiënten</h1>
            <div id="search-box" class="w-2/3 border-gray-400 border-2 rounded-2xl ml-40 flex h-8 sm:ml-20">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
        </header>
        <div id="main" class=" rounded-md p-4 sm:p-2 mt-8">
            <div id="serach" class="flex items-center">
                <input type="text" placeholder="E-mail adres" class="w-2/3 bg-transparent border-2 border-gray-400 rounded-lg pl-2">
                <button class=" rounded-md sm:text-xs text-white py-1 bg-green-500 px-2">stuur Uitnodiging</button>
            </div>
            <h1 class="text-3xl font-semibold text-gray-500 mt-8">In afwatching</h1>
            <div id="patinet-row" class="border-2 border-gray-400 p-1 my-4 rounded-md flex justify-between items-center" v-for="k in 2" :key="k">
                <div id="left" class="flex items-center">
                    <section id="image" class="w-52 h-28 relative sm:w-24 sm:h-16">
                        <img src="@/assets/images/lady.png" class="object-cover object-center w-full h-full visible rounded-lg" alt="">
                    </section>
                    <section id="details" class="ml-2">
                        <h2 class="text-gray-700 font-semibold text-2xl sm:text-lg">Ashley Scott</h2>
                        <div class="text-gray-600 sm:flex sm:flex-col">
                            <span class="mx-1">Leeftijd</span>
                            <span class="mx-1">Lengte</span>
                            <span class="mx-1">Gewicht</span>
                        </div>
                    </section>
                </div>
                <div id="right" class="text-center">
                    <button class="rounded-md sm:text-xs text-white py-1 bg-green-500 px-2">In afwatching</button>
                    <h5 class="text-sm">Verstuurd op 1/7/2021</h5>
                </div>
            </div>
            <h1 class="text-3xl font-semibold text-gray-500 mt-8">Huidige Patiënten</h1>
            <div id="patinet-row" class="border-2 border-gray-400 p-1 my-4 rounded-md flex justify-between items-center" v-for="k in 2" :key="k">
                <div id="left" class="flex items-center">
                    <section id="image" class="w-52 h-28 relative sm:w-24 sm:h-16">
                        <img src="@/assets/images/lady.png" class="object-cover object-center w-full h-full visible rounded-lg" alt="">
                    </section>
                    <section id="details" class="ml-2">
                        <h2 class="text-gray-700 font-semibold text-2xl sm:text-lg">Ashley Scott</h2>
                        <div class="text-gray-600 sm:flex sm:flex-col">
                            <span class="mx-1">Leeftijd</span>
                            <span class="mx-1">Lengte</span>
                            <span class="mx-1">Gewicht</span>
                        </div>
                    </section>
                </div>
                <div id="right" class="text-center">
                    <div id="icons" class="flex">
                        <button class="bg-gray-300 border-gray-500 border-2 p-2 mx-1">
                            <span class="iconify" data-icon="et:magnifying-glass" style="height:25px"></span>
                        </button>
                        <button class="bg-gray-300 border-gray-500 border-2 p-2 mx-1">
                            <span class="iconify" data-icon="clarity:email-line" data-inline="false"></span>
                        </button>
                        <button class="bg-red-300 border-red-500 border-2 p-2 mx-1">
                            <span class="iconify" data-icon="feather:x" data-inline="false" style="color: darkred"></span>
                        </button>
                    </div>
                    <h5 class="text-sm mt-2">Patiënt sinds 1/7/2021</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 w-1/12 text-center sm:hidden"></section>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
export default {
  name: 'patients',
  components: {
    SideBar
  },
  data(){
    return{

    }
  }


}
</script>
<style>
#profile-image{
    min-width: 130px;
}
.iconify { width: 30px; height: 30px;}
</style>
