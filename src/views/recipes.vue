<template>
  <main class="flex min-h-screen">
    <SideBar />

    <section class="bg-gray-100 w-10/12 p-4 sm:w-full">
        <header class="flex items-center">
            <h1 class="text-3xl font-bold text-gray-800">Recepent</h1>
            <div id="search-box" class="w-1/2 border-gray-400 border-2 rounded-2xl ml-40 flex">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
        </header>
        <div id="links" class="flex justify-start text-white my-8">
            <router-link to="#" class="bg-green-500 mx-2 p-2 rounded-xl">Nieuw Recept</router-link>
            <router-link to="#" class="bg-green-500 mx-2 p-2 rounded-xl">Mijn Recepten</router-link>
            <router-link to="#" class="bg-green-500 mx-2 p-2 rounded-xl">Recept Promoten</router-link>
        </div>
        <div id="main" class="border-2 border-gray-400 rounded-md p-3 sm:p-2 flex">
                <div id="upload-image" class="w-1/3 bg-gray-300 rounded-md h-60 border-gray-600 border-2 flex justify-center items-center flex-col p-4 relative">
                    <i class="far fa-file fa-7x  pointer-events-none text-gray-600" ></i>
                    <input type="file" class="opacity-0 border-primary cursor-pointer ml-16 absolute w-full h-full left-0 top-0">
                </div>
                <div id="form" class="w-2/3 p-3 ml-4">
                    <div id="row" class="mb-5">
                        <label class="font-semibold">Titel</label>
                        <br>
                        <input type="text" placeholder="Coffe Bean and Banana Soup" class="recipe-input">
                    </div>
                    <div id="row" class="my-6 sm:my-4">
                        <label class="font-semibold">URL</label>
                        <br>
                        <input type="text" placeholder="myrecipe.com" class="recipe-input">
                    </div>
                    <div id="row" class="my-6 sm:my-4">
                        <label class="font-semibold">Ingredient</label>
                        <br>
                        <input type="text" placeholder="Coffe Beans" class="recipe-input">
                    </div>
                    <div id="row" class="my-6 sm:my-4">
                        <label class="font-semibold">Allergien</label>
                        <br>
                        <div class="flex items-center">
                            <img src="@/assets/images/nutritions-icon.png" width="150" alt="">
                            <button class="bg-green-600 text-white font-bold px-0.5 text-xl rounded-md ml-4">+</button>
                        </div>
                    </div>
                    <div id="row" class="my-6 sm:my-4">
                        <label class="font-semibold">Keuken</label>
                        <br>
                        <input type="text" placeholder="BBQ" class="recipe-input">
                    </div>
                    <div id="row" class="my-6 sm:my-4">
                        <label class="font-semibold">Type</label>
                        <br>
                        <input type="text" placeholder="BREAKFAST" class="recipe-input">
                    </div>
                    <div id="buttons" class="flex justify-end">
                        <button class="rounded-md text-white text-lg mr-2 bg-gray-500 px-2">Annuleer</button>
                        <button class="rounded-md text-white text-lg ml-2 bg-green-600 px-2">Verstuur</button>
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
<style>

</style>
