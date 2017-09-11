<template>
    <div class="btn" :class="[getClass(),getSize()]" @click="$emit('click')">{{text}}</div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props:{
            type:{
                default:'default'
            },
            text:{
                default:'按钮'
            },
            size:{
                default:'middle'
            }
        },
        methods:{
            getClass(){
               if(this.type=='success'){
                   return 'success-btn';
               } else if(this.type=='error'){
                   return "error-btn"
               }else if(this.type=='warn'){
                   return "warn-btn"
               }else if(this.type=='default'){
                   return "default-btn"
               }else{
                   return "default-btn"
               }
            },
            getSize(){
                if(this.size=='large'){
                    return 'large-btn';
                }else if(this.size=='middle'){
                    return 'middle-btn';
                }else if(this.size=='mini'){
                    return 'mini-btn'
                }else{
                    return 'middle-btn';
                }
            }
        }
    }
</script>

<style>
    .btn:before{
        content: '';
    }
    .btn{
        display: inline-block;
        -webkit-border-radius:3px;
        -moz-border-radius:3px;
        border-radius:3px;
        color: #fff;
        font-family: "微软雅黑";
        cursor: pointer;
    }
    .success-btn{
        background: #13ce66;
    }
    .error-btn{
        background: #ff4949;
    }
    .warn-btn{
        background: #f7ba2a;
    }
    .default-btn{
        background: #50bfff;
    }
    .large-btn{
        padding: 11px 19px;
        font-size: 16px;
    }
    .middle-btn{
        padding: 10px 15px;
        font-size: 14px;
    }
    .mini-btn{
        padding: 7px 9px;
        font-size: 12px;
    }
</style>
