

<template>
    <div class="panel">
        <h2 class="panel-title">{{ title }}</h2>
        <slot class="panel-content"></slot>
    </div>
</template> 

<script>
    export default {
        name: 'panel',
        props: ['title'],
    }
</script>

<style scoped lang="scss">

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
