<template>
  <div class="hello">
    {{msg}}
    <div>
      <button @click="SNToast('这是一条信息')">toast</button>
      <button @click="SNLoading.show">loadingshow</button>
      <button @click="SNLoading.hidn">loadinghidn</button>
      <button @click="SNSuccess()">success</button>
      <button @click="SNError()">error</button>
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
//      this.SNToast({'type':'loading'});
      this.SNToast.loading();
//      this.SNSuccess('1111');
//      this.SNError('1111');
//      this.SNToast(1111);
//      this.SNToast({'data':'123'});
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
