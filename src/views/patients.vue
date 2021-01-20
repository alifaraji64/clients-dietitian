<template>
  <main class="flex min-h-screen">
    <SideBar />

    <section class="bg-gray-100 w-10/12 p-4 sm:w-full sm:p-2">
        <header class="flex items-center">
            <h1 class="text-3xl font-bold text-green-800">Patienten</h1>
            <div id="search-box" class="w-2/3 border-gray-400 border-2 rounded-2xl ml-40 flex h-8 sm:ml-20">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
        </header>
        <div id="main" class=" rounded-md p-4 sm:p-2 mt-8">
            <div id="patinet-row" class="border-2 border-gray-400 p-1 my-4 rounded-md flex justify-between items-center" v-for="k in 5" :key="k">
                <div id="left" class="flex items-center">
                    <section id="image" class="w-60 h-40 relative my-2 sm:w-24 sm:h-16">
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
                <div id="right">
                    <h3>diagnose</h3>
                    <h3 class="text-green-800 font-medium transform -translate-x-4 sm:translate-x-0 text-lg">Diabetes</h3>
                    <h4 class="transform translate-y-8 translate-x-4">Allergien</h4>
                    <img src="@/assets/images/nutritions-icon.png" width="100" alt="">
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
</style>
