<template>
	<div>
        <div>
            <label class="demo--label" v-for="item in datalist">
                <input class="demo--radio" type="radio"  name="demo-radio" :value="getKeys(item)" :checked="item.checked" v-model="checkedNames"  :disabled="item.disabled" >
                <span class="demo--radioInput" :class="{disable:item.disabled}"></span>{{getName(item)}}
            </label>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
                datalist:[],
                checkedNames:''
            }
		},
        props:{
            list:Array,
            str:{
                default:'name'
            },
            keys:{
                default:'id'
            }
        },
        watch:{
            checkedNames:{
                handler(val, oldVal){
                    this.$emit("input",val)
                },
                deep:true
            }
        },
        mounted(){
            this.datalist=this.list
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].checked){
                    this.checkedNames=this.list[i][this.keys]
                }
            }
        },
        methods:{
            getKeys(item){
                return item[this.keys];
            },
            getName(item){
                return item[this.str];
            }
        }
	}

</script>
<style>
    .demo--label{margin:20px 20px 0 0;display:inline-block}
    .demo--radio{display:none}
    .demo--radioInput{background-color:#fff;border:1px solid rgba(0,0,0,0.15);border-radius:100%;display:inline-block;height:16px;margin-right:10px;margin-top:-1px;vertical-align:middle;width:16px;line-height:1}
    .demo--radio:checked + .demo--radioInput:after{background-color:#57ad68;border-radius:100%;content:"";display:inline-block;height:12px;margin:2px;width:12px}
    .demo--checkbox.demo--radioInput,.demo--radio:checked + .demo--checkbox.demo--radioInput:after{border-radius:0}

    .disable:after{
        background-color:#d9d9d9;border-radius:100%;content:"";display:inline-block;height:12px;margin:2px;width:12px
    }
</style>
