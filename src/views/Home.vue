<template>
  <main class="flex min-h-screen">
    <SideBar />

    <section class="bg-gray-100 w-8/12 p-4 sm:w-full">
      <h1 class="text-3xl font-bold text-gray-800">Home</h1>
      <div id="banner" class="bg-green-700 mt-8 w-3/4 mx-auto p-4 rounded-xl flex items-center justify-between">
        <div id="text" class="text-white">
          <h1 class="text-3xl">Hallo Zee,</h1>
          <p class="text-lg">Welkome op uw dashboard</p>
        </div>
        <div id="image" class="text-white w-1/2 h-1/2">
          <img src="@/assets/images/fruits.png" class="w-1/3 transform scale-170 rotate-90 translate-y-1 translate-x-20" alt="">
        </div>
      </div>
      <div id="date-slide" class="mt-8">
        <h2 class="text-green-700 text-2xl font-bold">Januari 5-11</h2>
        <div id="days" class="flex justify-around border-t-2 border-b-2 border-gray-300">
          <section v-for="(day,index) in days" :key="index" class="text-center py-2 rounded-xl p-1 my-2" :class="day.isIn ? 'bg-green-800':''">
            <h3 class="text-xl" :class="day.isIn ? 'text-white':'text-green-700'">{{day.day}}</h3>
            <h3 class="text-xl" :class="day.isIn ? 'text-white':'text-gray-600'">{{day.num}}</h3>
          </section>
        </div>
      </div>
      <div id="chart" class="mt-8 shadow-lg text-center p-2 rounded-lg">
        <h2 class="text-2xl text-green-500">Klanten</h2>
        <br>
          <la-cartesian :bound="[0]" :data="chartData" class="transform sm:-translate-x-20 sm:scale-60 mx-auto">
            <defs>
              <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop stop-color="#10b981" offset="0%" stop-opacity="0.4"></stop>
              </linearGradient>
            </defs>
            <la-area fill-color="url(#area-fill)" dot curve prop="pv"></la-area>
            <la-x-axis prop="name"></la-x-axis>
            <la-y-axis></la-y-axis>
         </la-cartesian>
         <h2 class="text-2xl text-green-700">3,292,745</h2>
      </div>
      <div id="button" class="mt-4">
        <router-link to="/" class="bg-green-500 text-white text-lg py-1 px-3 rounded-md">CONTACT SUPPORT</router-link>
      </div>
    </section>

    <section class="bg-gray-100 w-3/12 text-center sm:hidden">
      <div id="img" class=" flex justify-end">
        <img src="@/assets/images/nutritions-icon.png" width="150" alt="">
      </div>
      <h2 class="text-2xl text-green-500 font-semibold mb-2">Afspraken</h2>
      <div id="calendar" class="mb-3 mx-auto text-center">
        <vc-date-picker v-model="date" />
      </div>
    </section>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
export default {
  name: 'Home',
  components: {
    SideBar
  },
  data(){
    return{
      days:[
        {day:'Mon',num:6, isIn:true},
        {day:'Tue',num:7, isIn:false},
        {day:'Wed',num:8, isIn:false},
        {day:'Thu',num:9, isIn:false},
        {day:'Fri',num:10, isIn:false},
        {day:'Sat',num:11, isIn:false},
        {day:'Sun',num:12, isIn:false},
      ],
      chartData:[
      { name: '', pv: 2400 },
      { name: '', pv: 1398 },
      { name: '', pv: 9800 },
      { name: '', pv: 3908 },
      { name: '', pv: 4800 },
      { name: '', pv: 3800 },
      { name: '', pv: 4300 }
      ],
      date:new Date()
    }
  }


}
</script>
<style>

</style>
