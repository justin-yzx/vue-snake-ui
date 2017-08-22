<template>
  <div class="hello">
    {{msg}}
    <div>
      <button @click="SNToast('123')">toast</button>
      <button @click="SNToast.loading.show">loadingshow</button>
      <button @click="SNToast.loading.hide">loadinghidn</button>
      <button @click="SNToast.success()">success</button>
      <button @click="SNToast.error()">error</button>
      <button @click="showActionSheet()">SNActionSheet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to snake Vue.js App'
    }
  },
  methods:{
    showtoast(){
      this.SNToast({'type':'success',msg:'12312312'});
    },
    showActionSheet(){
        this.SNActionSheet({
          title:'我来组成头部',
          btnList:[
            {id:'1',str:'我是按钮1'},
            {id:'2',str:'我是按钮2'},
            {id:'3',str:'我是按钮3'},
          ],
          success:(num)=>{
            this.SNToast('我点击按钮'+num);
          },
          cancel:()=>{
            this.SNToast('我点击返回');
          },
          key:'id',
          value:'str'
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
