

<template>
    <div class="wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <ul class="photos-list">
            <li class="photo-item" v-for="photo of photos">
                <div class="panel">
                    <h2 class="panel-title">{{ photo.title }}</h2>
                    <div class="panel-content">
                        <img class="panel-pic" :src="photo.url" :alt="photo.title">
                    </div>
                </div>
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

    .panel {
        border-radius: 10px 10px 0 0 ;
        box-shadow: #666 0 0 10px;
        display: inline-block;
        text-align: center;
        vertical-align: top;
        width: 100%;

        .panel-title {
            border-bottom: #4A78A6 2px inset;
            background: linear-gradient(0deg, #799dc2, transparent);
            margin: 0;
            line-height: 30px;
            font-size: 20px;
        }
        
        .panel-pic {
            width:100%;
        }
    }


    
</style>
