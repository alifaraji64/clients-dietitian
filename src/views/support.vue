<template>
  <main class="flex min-h-screen">
    <SideBar />
    <section class="bg-gray-100 w-10/12 p-4 sm:w-full">
        <header class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-green-800 sm:text-2xl">Recepten</h1>
            <div id="search-box" class="w-2/5 border-gray-400 border-2 rounded-2xl ml-40 flex h-8 sm:ml-4 sm:h-6 sm:mr-1">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
            <RightNavIcons/>
        </header>
        <div id="main" class="border-2 border-gray-400 rounded-md p-3 sm:p-2 mt-8">
            <div class=" flex flex-col mx-auto w-full pl-32 sm:pl-12">
                <label class="text-2xl font-semibold text-gray-700 sm:text-xl">Naam:</label>
                <input type="text" placeholder="Naam" class="recipe-input mb-4">
                <label class="text-2xl font-semibold text-gray-700 sm:text-xl">E-mail:</label>
                <input type="text" placeholder="email@url.com" class="recipe-input mb-4">
                <label class="text-2xl font-semibold text-gray-700 sm:text-xl">Onderwerp</label>
                <input type="text" placeholder="email@url.com" class="recipe-input mb-4">
                <label class="text-2xl font-semibold text-gray-700 sm:text-xl">Bericht</label>
                <!-- <input type="text" > -->
                <textarea placeholder="email@url.com" class="recipe-input mb-4" rows='9'></textarea>
                <div id="buuton" class="flex justify-end w-3/4">
                    <button class="bg-green-600 text-white text-lg py-1 px-3 rounded-md">Verstuur</button>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 w-1/12 text-center sm:hidden">
    </section>

  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import RightNavIcons from "@/components/RightNavIcons.vue"
export default {
  name: 'new-recipes',
  components: {
    SideBar,RightNavIcons
  },
  data(){
    return{

    }
  }


}
</script>
<style scoped>
.iconify { width: 120px; height: 120px;color:rgb(49, 49, 49); }
</style>

