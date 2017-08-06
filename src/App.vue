

<template>
    <div class="wrapper">
        <main-menu :routes="routes"></main-menu>
        <transition name="page">
            <router-view></router-view>
        </transition>
    </div>
</template> 

<script>
    import { routes } from './routes';
    import Menu from './components/shared/menu/Menu.vue';
    export default {
        data () {
            return {
                routes,
            }
        },
        components: {
            'main-menu': Menu,
        },
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
