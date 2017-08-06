<template>
    <button class="btn" :class="buttonDesign" :type="type" @click="runAction">{{ label }}</button>
</template>
<script>
    export default {
        props: {
            label: {
                required: true,
                type: String
            },
            type: {
                required: true,
                type: String
            },
            confirm: Boolean,
            design: String,
        },
        methods: {
            runAction() {
                if(this.confirm ){
                    if(confirm('Do you confirm?')){
                        this.$emit('action');
                    }
                    return;
                }
            }
        },
        computed: {
            buttonDesign(){
                if(this.design == 'blue' || !this.design) return 'btn-blue';
                if(this.design == 'red') return 'btn-red';
                
            }
        }
    }
</script>
<style scoped lang="scss">

    .btn {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        margin: 10px 5px;
        font-size:1.2em;
        color: #fff;

        &.btn-red {
            background: #FF3B30;
        }
        
        &.btn-blue {
            background: #4A78A6;
        }
    }    
    
</style>