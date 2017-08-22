<template>
	<div>
    222222
	</div>
</template>

<script>
    export default {
        data(){
            return {
           
            }
        },
        methods: {
          hidn(){
            try {
              document.getElementsByTagName('body')[0].removeChild(this.$el);
            }catch (e){

            }
          }
        },
        mounted() {
        },
        components: {}
    }
</script>
<style>

</style>
