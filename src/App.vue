

<template>
    <div class="wrapper">
        <nav>
            <ul>
                <li v-for="route in routes">
                    <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
                </li>
            </ul>            
        </nav>
        <transition name="page">
            <router-view></router-view>
        </transition>
    </div>
</template> 

<script>
    import { routes } from './routes';
    export default {
        data (){
            return {
                routes,
            }
        }
    }
</script>

<style scoped lang="scss">
    
    .page-enter,
    .page-leave-active  {
        opacity: 0;
    }
    
    .page-enter-active,
    .page-leave-active {
        transition: opacity 1s
    }
</style>
