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
                        <label class="font-semibold">E-mail</label>
                        <br>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="row" class="mb-5  mx-auto w-2/3 sm:w-full">
                        <label class="font-semibold">Wachtwoord</label>
                        <br>
                        <input type="text" class="recipe-input min-w-full">
                    </div>
                    <div id="buttons" class="flex justify-center w-full">
                        <button class="rounded-sm text-white text-lg ml-2 bg-green-500 px-8">Login</button>
                    </div>
                    <div id="link" class="flex justify-center w-full underline mt-8">
                        <router-link to="/password">Reset je Wachtwoord</router-link>
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