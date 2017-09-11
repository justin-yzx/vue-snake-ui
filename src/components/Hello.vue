<template>
    <div>
        <div class="snake-show-list">{{msg}}</div>
        <div class="snake-show-list">
            <SNButton @click="SNToast('hello snake')" text="SNToast"></SNButton>
            <SNButton @click="SNToast.loading.show()" text="loadingshow"></SNButton>
            <SNButton @click="SNToast.loading.hide()" text="loadinghide"></SNButton>
            <SNButton @click="SNToast.success()" text="success"></SNButton>
            <SNButton @click="SNToast.error()" text="error"></SNButton>
        </div>
        <div class="snake-show-list">
            <SNButton @click="showActionSheet()" text="SNActionSheet"></SNButton>
            <SNButton @click="showAlert()" text="SNAlert"></SNButton>
        </div>
        <div class="snake-show-list">
            <SNSwitch v-model="snswitch" size="mini"></SNSwitch>
            <SNSwitch v-model="snswitch"></SNSwitch>
            <SNSwitch v-model="snswitch" size="large"></SNSwitch>
        </div>
        <div class="snake-show-list">
            <SNDatePicker placeholder="请选择日期" format="yyyy-MM-dd" v-model="datePickerStr"></SNDatePicker>
        </div>
        <div class="snake-show-list">
            <SNCheckBox :list="checkBoxList" v-model="result" str="name" keys="id"></SNCheckBox>
            <div>选中结果:{{result}}</div>
        </div>
        <div class="snake-show-list">
            <div>
                <SNButton text="默认按钮"></SNButton>
            </div>
            <div>
                <SNButton type="success" size="large" text="成功"></SNButton>
                <SNButton type="error" size="middle" text="失败"></SNButton>
                <SNButton type="info" size="" text="提示"></SNButton>
                <SNButton type="warn" size="mini" text="警告"></SNButton>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to snake Vue.js App',
                datePickerStr: '',
                checkBoxList: [
                    {name: "示例1", id: "1", checked: false, disabled: false},
                    {name: "示例2", id: "2", checked: true, disabled: false},
                    {name: "示例3", id: "3", checked: false, disabled: false}
                ],
                result: [],
                snswitch:true,
            }
        },
        methods: {
            showActionSheet() {
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
            showAlert() {
                this.SNAlert({
                    msg: 'hello snake',
                    btn: [
                        {
                            str: '确定',
                            callback: () => {
                                this.SNToast('确定');
                            }
                        }, {
                            str: '取消',
                            callback: () => {
                                this.SNToast('取消');
                            }
                        }
                    ]
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .snake-show-list {
        padding: 10px;
        border-bottom: 1px solid #bebebe;
    }

    .snake-show-list .btn {
        margin: 5px;
    }

    .snake-show-list .switch-box {
        margin: 5px;
    }
</style>
