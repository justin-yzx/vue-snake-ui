<template>
	<div class="toast-box">
      <div class="toast-msg" v-if="type=='msg'">{{msg}}</div>
      <div class="toast" v-if="type=='success'">
          <i class="toast-icon toast-success-icon"></i>
          <div class="toast-tip">{{successmsg}}</div>
      </div>
      <div class="toast" v-if="type=='error'">
        <i class="toast-icon toast-error-icon"></i>
        <div class="toast-tip">{{errormsg}}</div>
      </div>
      <div class="toast"  v-if="type=='loading'">
        <i class="toast-loading"></i>
        <div class="toast-tip">{{loadingmsg}}</div>
      </div>

	</div>
</template>

<script>
    export default {
        data(){
            return {
              msg:'',
              remain:1,
              type:'msg',
              successmsg:'已完成',
              errormsg:'失败',
              loadingmsg:'数据加载中'
            }
        },
        methods: {
            remove(){
              setTimeout(()=>{
                this.hidn();
              },this.remain*1000)
            },
            hidn(){
              try {
                document.getElementsByTagName('body')[0].removeChild(this.$el);
              }catch (e){

              }
            }
        },
        mounted() {
        },
        components: {},
    }
</script>
<style>

</style>
