<template>
    <div class="hello">
        {{msg}}
        <div>
            <button @click="showtoast('123')">toast</button>
            <button @click="SNToast.loading.show">loadingshow</button>
            <button @click="SNToast.loading.hide">loadinghidn</button>
            <button @click="SNToast.success()">success</button>
            <button @click="SNToast.error()">error</button>
            <button @click="showActionSheet()">SNActionSheet</button>
            <button @click="showAlert()">alert</button>
            <SNSwitch v-model="snswitch"></SNSwitch>
            <SNSwitch v-model="snswitch"></SNSwitch>

            <SNDatePicker placeholder="请选择时间" format="yyyy-MM-dd" v-model="datePickerStr"></SNDatePicker>
            <div>
                <span>选择后的时间是:</span>
                <span>{{datePickerStr}}</span>
            </div>

            <SNCheckBox :list="list" v-model="result" str="name" keys="id"></SNCheckBox>
            <div>{{result}}</div>

            <SNButton :type="btnType" :size="btnSize" :text="btnText"></SNButton>
            <SNButton type="success" size="large" :text="btnText"></SNButton>
            <SNButton type="error" size="mini" :text="btnText"></SNButton>
            <SNButton type="" size="middle" :text="btnText"></SNButton>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to snake Vue.js App',
                btnType:'warn',
                btnText:'按钮',
                snswitch: true,
                btnSize:'mini',
                datePickerStr:'',
                list:[
                    {name:"中国",id:"ch",checked:false,disabled:false},
                    {name:"美国",id:"am",checked:false,disabled:false},
                    {name:"日本鬼",id:"jp",checked:false,disabled:true}
                ],
                result:[]
            }
        },
        methods: {
            showtoast(){
                this.SNToast('snake');
            },
            showActionSheet(){
                var arr = [
                    {key: '1', value: '我是按钮1'},
                    {key: '2', value: '我是按钮2'},
                    {key: '3', value: '我是按钮3'},
                ]

                this.SNActionSheet({
                    title: '我来组成头部',
                    btnList: arr,
                    success: (num) => {
                        this.SNToast('我点击按钮' + num);
                    },
                    cancel: () => {
                        this.SNToast('我点击返回');
                    },
                    key: 'key',
                    value: 'value'
                });
            },
            showAlert(){
                this.SNAlert('123');
//      this.SNAlert({
//        msg:'我来展示一下啊',
//        btn:[
//          {
//              str:'确定',
//              callback:()=>{
//                this.showtoast();
//              }
//          }, {
//            str:'取消',
//            callback:()=>{
//              this.showtoast();
//            }
//          }
//        ]
//      });
//        this.SNAlert({
//          msg:'哈哈哈哈哈哈哈',
//          btn:111
//        })
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
