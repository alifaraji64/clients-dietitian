<template>
  <main class="flex min-h-screen">
    <SideBar />

    <section class="bg-gray-100 w-10/12 p-4 sm:w-full sm:p-2">
        <header class="flex items-center">
            <h1 class="text-3xl font-bold text-green-800">Profiel</h1>
            <div id="search-box" class="w-2/3 border-gray-400 border-2 rounded-2xl ml-40 flex h-8">
                <input type="text" placeholder="Zoek Recepten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
        </header>
        <div id="main" class="border-2 border-gray-400 rounded-md p-4 sm:p-2 flex mt-8 sm:flex-col sm:items-center">
                <div id="profile-image" class="w-1/6 rounded-md h-40 bg-green-700 flex justify-center items-end">
                    <i class="fas fa-user-alt fa-7x text-white"></i>
                </div>
                <div class="w-5/6 flex justify-between items-start mt-1 sm:w-full">
                    <section id="column-1" class=" mx-3 w-1/2 sm:mx-0">
                        <div class="mb-4">
                            <label class="text-gray-400 text-lg">Naam</label>
                            <input type="text" :value="info.name" class="bg-transparent text-3xl block ml-4 sm:text-xl">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">E-mail</label>
                            <input type="text" :value="info.email" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">KVK-Number</label>
                            <input type="text" :value="info.KVK" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">BTW-Number</label>
                            <input type="text" :value="info.BTW" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">IBAN</label>
                            <input type="text" :value="info.IBAN" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                    </section>
                    <section id="column-2" class=" mx-3 w-1/2 sm:m-0">
                        <div class="mb-4">
                            <label class="text-gray-400 text-lg">Bedrijfsnaam</label>
                             <input type="text" value="Diets De Vos" class="bg-transparent text-3xl block font-semibold ml-4 sm:text-xl">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">Website</label>
                            <input type="text" :value="info.website" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">Language</label>
                            <input type="text" :value="info.language" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">Adress</label>
                            <textarea rows="5" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm" :value='info.address'></textarea>
                        </div>
                        <div class="my-4">
                            <label class="text-gray-400 text-lg">Specialities</label>
                            <input type="text" :value="info.specialities" class="bg-transparent text-xl block font-semibold ml-4 sm:text-sm">
                        </div>
                        <div id="buttons" class="flex justify-end mt-16">
                            <button class="rounded-md text-white text-lg mr-2 bg-gray-500 px-2">Annuleer</button>
                            <button class="rounded-md text-white text-lg ml-2 bg-green-600 px-2">Bewaar</button>
                        </div>
                    </section>
                </div>
        </div>
    </section>
    <section class="bg-gray-100 w-1/12 text-center sm:hidden"></section>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
export default {
  name: 'profile',
  components: {
    SideBar
  },
  data(){
    return{
        info:{
            name:'Coffee',
            email:'email@url.com',
            KVK:'5723845',
            BTW:'NL5453480',
            IBAN:'NL8R23454587AJH',
            website:'myrecipes.com',
            language:'Dutch,English',
            address:'123 Coffee Street 2583 GQ, Coffee City ZH, The netherlands',
            specialities:'Coffee'
        }
    }
  }


}
</script>
<style>
#profile-image{
    min-width: 130px;
}
</style>
