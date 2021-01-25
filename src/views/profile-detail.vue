<template>
  <main class="flex min-h-screen">
    <SideBar />
    <section class="bg-gray-100 w-11/12 p-4 sm:w-full sm:p-2">
        <header class="flex items-center">
            <h1 class="text-3xl font-bold text-green-800">Patiënten</h1>
            <div id="search-box" class="w-2/3 border-gray-400 border-2 rounded-2xl ml-40 flex h-8 sm:ml-20">
                <input type="text" placeholder="Zoek Patiënten" class="w-11/12 bg-transparent focus:outline-none pl-2 sm:w-9/12">
                <button class="bg-green-500 text-white w-1/12 rounded-full sm:w-3/12">GA</button>
            </div>
        </header>
        <div id="main" class=" rounded-md p-4 sm:p-2 mt-8">
            <div id="first-row" class="flex p-1 sm:flex-wrap justify-evenly">
                <div id="details-column" class="border-2 border-gray-400 rounded-lg">
                    <section id="first-row" class="flex items-center px-4">
                        <div id="image" class="w-40 h-40 relative my-2 sm:w-24 sm:h-16">
                            <img src="@/assets/images/lady.png" class="object-cover object-center w-full h-full visible rounded-lg" alt="">
                        </div>
                        <div class="ml-4">
                            <label>Naam</label>
                            <h1 class="text-3xl font-semibold ml-3 sm:text-xl">Ashley Scott</h1>
                            <label>E-mail</label>
                            <h3 class="text-lg font-semibold ml-3">email@url.com</h3>
                        </div>
                        <div class="ml-24 sm:ml-10">
                            <p class="py-3">Maandelijkse Calorieen</p>
                            <p class="py-3">Maandelijkse Calorieen</p>
                            <p class="py-3">Maandelijkse Calorieen</p>
                        </div>
                    </section>
                    <section id="second-row" class="flex p-2 pl-4 sm:pl-2">
                        <h3 class="px-2 text-gray-600 font-semibold">Leeftijd: <span>28</span></h3>
                        <h3 class="px-2 text-gray-600 font-semibold">Leeftijd: <span>173cm</span></h3>
                        <h3 class="px-2 text-gray-600 font-semibold">Leeftijd: <span>70kg</span></h3>
                    </section>
                </div>
                <div id="notifies-column" class="flex flex-col border-2 border-gray-400 ml-4 rounded-lg text-center sm:w-full sm:mt-4">
                    <h4>Notifies</h4>
                    <hr>
                    <textarea cols="30" rows="5" class="bg-transparent w-4/5 mx-auto border-2 border-gray-300"></textarea>
                    <div class="flex justify-end mt-4 w-4/5 mx-auto">
                       <button class="rounded-md text-white text-lg bg-green-600 px-2">Bewaar</button>
                    </div>
                </div>
            </div>
            <div id="second-row" class="flex justify flex-wrap">
                <section id="calendar-column" class="pl-16 sm:mt-16">
                    <h3 class="border-2 border-gray-400 px-3 py-1 text-gray-600 text-center w-40 mx-auto">Maandelijks</h3>
                    <div id="calendar" class="mb-3 mx-auto text-center">
                        <vc-date-picker v-model="date" />
                    </div>
                </section>
                <section id="dagoboek-column" class=" p-4">
                    <h1 class="text-3xl font-semibold ml-3">dagoboek</h1>
                    <div id="item" v-for="(item,index) in items" :key="index" class="flex border-2 border-gray-400 rounded-lg p-2 items-center mt-2">
                        <section id="icon" class="bg-gray-300 p-1 border-gray-700 border-2 rounded-lg">
                            <span class="iconify" data-icon="uil:image-upload" data-inline="false"></span>
                        </section>
                        <section id="text" class="ml-3">
                            <h3 class="text-xl sm:text-lg font-semibold text-gray-700">{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                        </section>
                        <section id="date" class="ml-3">
                            <p class="mt-6 pl-24 sm:pl-8">1/9/2021</p>
                        </section>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button @click="load">Bekijk Alles</button>
                    </div>

                </section>
            </div>
        </div>
    </section>
    <!-- <section class="bg-gray-100 w-1/12 text-center sm:hidden"></section> -->
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
        date:new Date(),
        items:[
            {title:'Titel van gscanned product',desc:'Omschrijving van gescand product'},
            {title:'Titel van gscanned product',desc:'Omschrijving van gescand product'},
        ]
    }
  },
  methods:{
      load(){
          console.log('yoo');
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
