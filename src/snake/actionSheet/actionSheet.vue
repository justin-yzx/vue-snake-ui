<template>
  <div class="snake-box noselect" style="background: rgba(0,0,0,.4)" >
    <transition name="fold">
    <div class="action-box" v-show="show">
      <div class="action-contain">
        <div class="action-title noselect" v-if="title">
          {{title}}
		    </div>
        <div>
          <div v-for="item in btnList" class="action-btn noselect" @click="clickBtn(getBtnKey(item))">{{getBtnValue(item)}}</div>
        </div>
      </div>
      <div class="action-cancal" @click="cancelClick">
        <div class="action-btn noselect">取消</div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
    export default {
        data(){
            return {
              title:'',
              btnList:[],
              key:'id',
              value:'str',
              show:false
            }
        },
        methods: {
          hide(){
            try {
              document.getElementsByTagName('body')[0].removeChild(this.$el);
            }catch (e){}
          },
          getBtnValue(item){
            return item[this.value];
          },
          getBtnKey(item){
            return item[this.key];
          },
          clickBtn(num){
              this.success(num);
              this.show=false;
              setTimeout(()=>{
                this.hide()
              },300);
          },
          cancelClick(){
            this.show=false;
            this.cancel();
            setTimeout(()=>{
              this.hide()
            },300);
          },
          success:(num)=>{
            //成功的回掉
          },
          cancel:()=>{
            //返回的回掉
          }
        },
        mounted() {
        },
        components: {},
        watch:{
          btnList(){
              this.show=true;
          }
        }
    }
</script>
<style>

</style>
