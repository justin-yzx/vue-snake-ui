<template>
  <div class="hello">
    {{msg}}
    <div>
      <button @click="SNToast('123')">toast</button>
      <button @click="SNToast.loading.show">loadingshow</button>
      <button @click="SNToast.loading.hide">loadinghidn</button>
      <button @click="SNToast.success()">success</button>
      <button @click="SNToast.error()">error</button>
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
