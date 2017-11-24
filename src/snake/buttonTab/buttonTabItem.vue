<template>
    <div class="button-tab-item" :class="index==$parent.index?'button-tab-item-active':''" @click="clickBtn">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index:0
            }
        },
        methods: {
            clickBtn(){
                this.$parent.index=this.index;
            }
        },
        mounted() {
            var num=this.$parent.$children.length;
            for(var i=0;i<num;i++){
                if(this.$parent.$children[i]==this){
                    this.index=i;
                }
            }
        },
        props: {},
        watch: {}
    }
</script>
<style>

</style>
