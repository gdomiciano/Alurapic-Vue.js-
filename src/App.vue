

<template>
    <div class="wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <ul class="photos-list">
            <li class="photo-item" v-for="photo of photos">
                <panel :title="photo.title">
                    <img class="panel-pic" :src="photo.url" :alt="photo.title"> 
                </panel>
           </li>
        </ul>
    </div>
</template> 

<script>
    import Panel from './components/shares/Panel.vue';

    export default {
        components: {
            'panel': Panel,
        }
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
    .wrapper {
        font-family: Helvetica, Arial, sans-serif;
        width: 96%;
        margin:0 auto;
    }

    .page-title {
        text-align: center;
    }

    .photos-list {
        list-style: none;
        padding: 0;
    }

    .photo-item {
        display: inline-block;
        margin: 1%;
        width: 23%;
        
    }

    
</style>
