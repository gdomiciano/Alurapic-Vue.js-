

<template>
    <div class="wrapper">
        <nav>
            <ul>
                <li v-for="route in routes">
                    <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
                </li>
            </ul>            
        </nav>
        <router-view></router-view>
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
    
</style>
