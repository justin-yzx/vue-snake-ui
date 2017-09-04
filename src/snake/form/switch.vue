<template>
	<div>
        <label><input class="switch switch-animbg" type="checkbox" v-model="check"></label>
	</div>
</template>

<script>
	export default {
		data(){
			return {
                check:this.value
            }
		},
        props:{
            value:{
                default: false
            }
        },
        watch:{
            value(){
            	this.check=this.value;
            },
            check(){
            	this.$emit('input',this.check)
            }
        }

	}
</script>
<style>

</style>
