<template>
	<div class="switch-box" :class="getSize()">
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
            },
            size:{
                default:'middle'
            }
        },
        watch:{
            value(){
            	this.check=this.value;
            },
            check(){
            	this.$emit('input',this.check)
            }
        },
        methods:{
            getSize(){
                if(this.size=='large'){
                    return 'large-switch';
                }else if(this.size=='mini'){
                    return 'mini-switch';
                }else{
                    return '';
                }

            }
        }

	}
</script>
<style>
    .switch-box{
        display: inline-block;
    }
    .mini-switch{
        transform:scale(0.8,0.8);
    }
    .large-switch{
        transform:scale(1.2,1.2);
    }
</style>
