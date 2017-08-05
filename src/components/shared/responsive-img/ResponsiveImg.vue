<template>
    <img class="panel-pic" :src="url" :alt="title">
</template>
<script>
export default {
    props: ['url' , 'title']
}    

</script>

<style lang="scss">
    
    .panel-pic {
        width: 100%;
    }
     
</style>