<template>
	<div class="snake-box" style="background: rgba(0,0,0,.4)">
    <div class="alert-box">
      <!--<div class="alert-title noselect" v-if="title">{{title}}</div>-->
      <div class="alert-center noselect">{{msg}}</div>
      <div class="alert-btn-group">
        <div v-for="(item,index) in btn" v-if="index<3" class="alert-btn noselect" @click="btnClick(index)">{{item.str}}</div>
      </div>
    </div>
	</div>
</template>

<script>
    export default {
        data(){
            return {
              msg:'',
              btn:[]
            }
        },
        methods: {
            hide(){
                try {
                  document.getElementsByTagName('body')[0].removeChild(this.$el);
                }catch (e){}
            },
            btnClick(index){
                try {
                  this.btn[index]['callback']()
                }catch (e){}
                this.hide();
            }
        },
        mounted() {},
        components: {}
    }
</script>
<style>

</style>
