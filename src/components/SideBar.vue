<template>
    <nav class='bg-green-700 w-1/12 h-screen sm:fixed sm:bottom-0 sm:left-0 sm:h-12 sm:w-full'>
        <div class=" h-1/6 sm:hidden">
            <img src="@/assets/images/sidebar-top.png" width="200" class='p-2 rounded-2xl' alt="">
        </div>
        <div id="links" class="flex items-center flex-col text-white relative h-5/6 sm:flex-row sm:justify-around">
            <router-link to="/" class="my-6"><i class="fas fa-home fa-5x sm:text-3xl"></i></router-link>
            <router-link to="/profile" class="my-6"><i class="far fa-user-circle fa-5x sm:text-3xl"></i></router-link>
            <router-link to="/s" class="my-6"><i class="fas fa-utensils fa-5x sm:text-3xl"></i></router-link>
            <router-link to="/d" class="my-6"><i class="fas fa-plus-circle fa-5x sm:text-3xl"></i></router-link>
            <router-link to="/f" class="absolute bottom-0 pb-1 sm:relative"><i class="fas fa-cog fa-5x sm:text-3xl"></i></router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-exact-active{
    padding-left: 3px;
    border-left: 5px solid white;
}
</style>