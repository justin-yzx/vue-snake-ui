<template>
	<div>


        <div  v-for="item in datalist" class="checkbox-con">

            <label>
                <input type="checkbox" :value="item.eng" v-model="checkedNames"  class="checkbox checkbox-green" :checked="item.checked" :disabled="item.disabled">
                <span>{{item.name}}</span>
            </label>


        </div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
                checkedNames: [],
                datalist:[]
            }
		},
        props:{
            list:Array
        },
        watch:{

            checkedNames:{
                handler(val, oldVal){
                    this.$emit("result",val)
                },
                deep:true
            }
        },
        mounted(){
		    this.datalist=this.list
            for(var i=0;i<this.list.length;i++){
		        if(this.list[i].checked){
                    this.checkedNames.push(this.list[i].eng)
                }
            }
        }

	}

</script>
<style>
    .checkbox-con{
        height: 30px;
        line-height: 30px;
        text-align: left;
    }
    .checkbox-con span{
        position: absolute;
    }
    .checkbox {
        -webkit-appearance: none;
        position: relative;
        width: 25px;
        height: 25px;
        top:2px;
        margin-right: 10px;
        background-color: #FFFFFF;
        border: solid 1px #d9d9d9;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        display: inline-block;
    }

    .checkbox:checked {
        background-color: #18b4ed;
        border: solid 1px #FFFFFF;
    }
    .checkbox:checked:before {
        display: inline-block;
        margin-top: 1px;
        margin-left: 2px;
        font-family: "weui";
        content: "\EA08";
        color: #FFFFFF;
        font-size: 18px;
    }
    .checkbox:disabled {
        background-color: #d9d9d9;
        border: solid 1px #d9d9d9;
    }
    .checkbox:disabled:before {
        display: inline-block;
        margin-top: 1px;
        margin-left: 2px;
        font-family: "weui";
        content:  "\EA08";
        color: #FFFFFF;
        font-size: 18px;
    }
    .checkbox.checkbox-green:checked {

        background-color: #5cb85c;
    }
    .checkbox.checkbox-orange:checked {
        background-color: #f0ad4e;
    }
    .checkbox.checkbox-s {
        width: 19px;
        height: 19px;
    }
    .checkbox.checkbox-s:before {
        display: inline-block;
        margin-top: 1px;
        margin-left: 2px;
        font-family: "weui";
        content:  "\EA08";
        color: #FFFFFF;
        font-size: 13px;
    }

    .checkbox-anim {
        -webkit-transition: background-color ease 0.2s;
        transition: background-color ease 0.2s;
    }
</style>
