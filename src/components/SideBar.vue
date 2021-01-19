<template>
    <nav class='bg-green-700 w-1/12 h-screen sm:fixed sm:bottom-0 sm:left-0 sm:h-16 sm:w-full'>
        <div class=" h-1/6 sm:hidden">
            <img src="@/assets/images/sidebar-top.png" width="200" class='p-2 rounded-2xl' alt="">
        </div>
        <div id="links" class="flex items-center flex-col text-white relative h-5/6 sm:flex-row sm:justify-around">
            <router-link to="/" class="my-3">
                <img src="@/assets/images/icons/home.png" class=" sm:w-16 max-w-xs" alt="home">
            </router-link>

            <router-link to="/profile" class="my-3">
                <img src="@/assets/images/icons/profile.png" class=" sm:w-16" alt="home">
            </router-link>

            <router-link to="/recipes" class="my-3">
                <img src="@/assets/images/icons/spoon-fork.png" class="sm:w-16" alt="home">
            </router-link>

            <router-link to="/d" class="my-3">
                <img src="@/assets/images/icons/add.png" class="sm:w-16" alt="home">
            </router-link>

            <router-link to="/f" class="absolute bottom-0 pb-1 sm:relative mb-3 sm:mb-0 sm:pb-0">
                <img src="@/assets/images/icons/settings.png" class="sm:w-16" alt="home">
            </router-link>
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
    border-bottom: 5px solid white;
}
a img{
    max-width: 95px;
    min-width: 50px;
}
</style>