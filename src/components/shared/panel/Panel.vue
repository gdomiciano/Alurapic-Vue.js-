

<template>
    <div class="panel">
        <h2 class="panel-title" @dblclick="isVisible = !isVisible">{{ title }}</h2>
        <transition name="fade-panel">
            <div class="panel-content" v-show="isVisible">
                <slot></slot>
            </div>
        </transition>
    </div>
</template> 

<script>
    export default {
        name: 'panel',
        props: ['title'],
        data() {
            return {
                isVisible: true,
            }
        }
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
  
        .fade-panel-enter,
        .fade-panel-leave-active  {
            opacity: 0;
        }
        
        .fade-panel-enter-active,
        .fade-panel-leave-active {
            transition: opacity 4s
        }
    }
    
        
</style>
