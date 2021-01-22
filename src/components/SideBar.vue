<template>
    <nav class='bg-green-700 w-/12 h-screen sm:fixed sm:bottom-0 sm:left-0 sm:h-20 sm:w-full sm:py-4 z-10'>
        <div class=" h-1/6 sm:hidden">
            <img src="@/assets/images/sidebar-top.png" width="200" class='p-2 rounded-2xl' alt="">
        </div>
        <div id="links" class="flex items-center flex-col text-white relative h-5/6 sm:flex-row sm:justify-around">
            <router-link to="/" class="mb-4 mt-16 sm:my-3" id="home">
                <img src="@/assets/images/icons/home.png" class="sm:w-16" alt="home">
            </router-link>

            <router-link to="/profile" class="my-3" id="profile">
                <img src="@/assets/images/icons/profile.png" class=" sm:w-16" alt="profile">
            </router-link>

            <router-link to="/recipes" class="my-3" id="spoon-fork">
                <img src="@/assets/images/icons/spoon-fork.png" class="sm:w-16" alt="spoon-fork">
            </router-link>

            <router-link to="/patients" class="absolute bottom-0 pb-1 sm:relative mb-3 sm:mb-0 sm:pb-0" id="settings">
                <img src="@/assets/images/icons/settings.png" class="sm:w-16" alt="home">
            </router-link>
        </div>
    </nav>
</template>

<script scoped>
export default {
    mounted(){
        console.log(this.$router.currentRoute.path);
        if(this.$router.currentRoute.path != '/new-recipes'){
            const activeLink = document.querySelector('.router-link-exact-active');
            let id = activeLink && activeLink.id;
            console.log(id);
            if(activeLink)activeLink.innerHTML = `<img src="./assets/images/green-icons/${id}-g.png" class="sm:w-16 w-24 transform translate-x-10 sm:translate-x-0 bg-white"/>`;
        }

        //activeLink.append(greenIcon);
    }
}
</script>

<style scoped>
    a img{
        max-width: 95px;
        min-width: 50px;
    }
</style>