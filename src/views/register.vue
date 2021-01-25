<template>
  <main class="min-h-screen bg-gray-100">
      <nav class="bg-green-700 px-2 flex">
          <router-link to="/" class="">
            <img src="@/assets/images/nutritions-icon.png" alt="logo" class="w-20 transform scale-170 translate-x-10">
          </router-link>
      </nav>
      <section id="main">
                <div id="form" class="w-2/3 p-3 mx-auto mt-20 sm:mt-4">
                    <div id="row" class="mb-5 mx-auto w-2/3 sm:w-full">
                        <label class="font-semibold">Naam</label>
                        <br>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full">
                        <label class="font-semibold">Praktijknaam</label>
                        <br>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full">
                        <label class="font-semibold">E-mail</label>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full">
                        <label class="font-semibold">Telefoonnummer</label>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full items-center">
                      <label class="font-semibold">Aantal zorgverleners</label>
                      <section class="flex items-center">
                        <div class="border-2 border-gray-400 p-2">{{range1}}</div>
                        <input type="range" min="1" max="50" class="slider" v-model="range1">
                      </section>
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full items-center">
                      <label class="font-semibold">Aantal zorgverleners</label>
                      <section class="flex items-center">
                        <div class="border-2 border-gray-400 p-2">{{range2}}</div>
                        <input type="range" min="50" class="slider" v-model="range2">
                      </section>
                    </div>
                    <div id="buttons" class="flex justify-center w-2/3  float-right">
                        <button class=" text-white text-lg ml-2 bg-green-500 px-4 py-1 rounded-sm">Vraag Demo Aan</button>
                    </div>
                </div>
      </section>
  </main>
</template>

<script>
export default {
    data(){
        return{
            range1:17,
            range2:60
        }
    }
}
</script>

<style>
.slider {
  -webkit-appearance: none;
  width: 60%;
  height: 15px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: 10px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 100%;
}
</style>