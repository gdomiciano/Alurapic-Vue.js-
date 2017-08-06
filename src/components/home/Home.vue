<template>
    <div>
        <h1 class="page-title">{{ title }}</h1>
        <input type="search" class="filter" @input="filter = $event.target.value" placeholder="search by title"/>
        <ul class="photos-list">
            <li class="photo-item" v-for="photo of photosWithFilter">
                <panel :title="photo.title">
                    <responsive-img :url="photo.url" :titulo="photo.title" />
                    <action-button type="button" label="Remove" @click.native="removeItem(photo)"/>
                </panel>
           </li>
        </ul>
    </div>
</template> 

<script>
    import Panel from '../shared/panel/Panel.vue';
    import ResponsiveImg from '../shared/responsive-img/ResponsiveImg.vue';
    import Button from '../shared/button/Button.vue'

    export default {
        components: {
            'panel': Panel, 
            'responsive-img':ResponsiveImg,
            'action-button': Button,
        },
        data() {
            return {
                title: 'Alurapic with Vue.js',
                photos: [],
                filter: '',
            }
        },
        computed: {
            photosWithFilter() {
                if(this.filter){
                    let regex = new RegExp(this.filter.trim(), 'i');
                    return this.photos.filter(photo => regex.test(photo.title));
                } else {
                    return this.photos;
                }
            },
        },
        created() {
            this.$http.get('http://localhost:3000/v1/photos')
                .then(res => res.json())
                .then(photos => this.photos = photos, error => console.log(error));
        },
        methods: {
            removeItem(photo) {
                alert('remove the picture'+photo.title);
            }
        }
    }
</script>

<style scoped lang="scss">
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

    .filter {
        display:block;
        width:100%
    }
    
</style>
