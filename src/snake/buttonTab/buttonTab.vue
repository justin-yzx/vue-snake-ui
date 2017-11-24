<template>
    <div class="button-tab">
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
        methods: {},
        mounted() {
            this.index=this.value;
            if(this.index>this.$children.length-1){
                this.index=0;
            }
        },
        props: {
            value:{
                default:-1
            }
        },
        watch: {
            index(){
                this.$emit('input',this.index);
            },
            value(){
                this.index=this.value;
            }
        }
    }
</script>
<style>
    .button-tab{
        display: flex;
        flex-wrap:nowrap;
        height: 34px;
        line-height: 34px;
        border: 1px solid #ddd;
        border-radius: 34px;
        overflow: hidden;
    }
    .button-tab-item{
        box-sizing: border-box;
        flex-grow:1;
        border-right: 1px solid #ddd;
        color: black;
    }
    .button-tab-item:last-child{
        border: none;
    }
    .button-tab-item-active{
        background: #ffe26d;
    }

</style>
