<template>
    <div>
        <h1>{{ title }}</h1> 
        <ul>
            <li v-for="photo of photos">
                
                <img :src="photo.url" :alt="photo.title">
        
            </li>
        </ul>
    </div>
</template> 

<script>
    export default {
        data() {
            return {
                title: 'Alurapic with Vue.js',
                photos: [],
            }
        },
        created() {
            this.$http.get('http://localhost:3000/v1/photos')
                .then(res => res.json())
                .then(photos => this.photos = photos, error => console.log(error));
        },
    }
</script>

<style lang="scss">
</style>
