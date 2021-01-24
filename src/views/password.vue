<template>
  <main class="min-h-screen bg-gray-100">
      <nav class="bg-green-600 px-2 flex">
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
                        <br>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="buttons" class="flex justify-center w-2/3  float-right">
                        <button class="text-white ml-2 bg-green-500 px-4 py-1 rounded-sm">Bewaar</button>
                    </div>
                </div>
      </section>
  </main>
</template>

<script>
export default {
    data(){
        return{
            range:50
        }
    }
}
</script>

<style>
</style>