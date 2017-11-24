<template>
    <div id="sn-qrcode">
    </div>
</template>

<script>
    import QRCode from 'davidshimjs-qrcodejs'
    export default {
        data() {
            return {
                name: 'snake-qrcode',
                qrcode:{},
            }
        },
        methods: {
            init(){
                this.qrcode = new QRCode(document.getElementById("sn-qrcode"), {
                    text: this.value,
                    width: this.size,
                    height: this.size,
                    colorDark : this.colorDark,
                    colorLight : this.colorLight,
                    correctLevel : QRCode.CorrectLevel.H
                });
            },
            reload(){
                if(!this.value){
                   return;
                }
                var vOption={
                    width: this.size,
                    height: this.size,
                    colorDark : this.colorDark,
                    colorLight : this.colorLight,
                }
                if (vOption) {
                    for (var i in vOption) {
                        this.qrcode._htOption[i] = vOption[i];
                    }
                }
                this.qrcode.clear();
                this.qrcode.makeCode(this.value);
                this.qrcode._oDrawing._elImage.style.width=this.size+'px';
                this.qrcode._oDrawing._elImage.style.height=this.size+'px';
            }
        },
        mounted() {
            this.init()
        },
        props: {
            value:{
                default:'vue-snake-ui'
            },
            size:{
                default:128
            },
            colorDark:{
                default:"#000"
            },
            colorLight:{
                default:"#ffffff"
            }
        },
        watch: {
            value(){
                this.reload();
            },
            size(){
                this.reload();
            },
            colorDark(){
                this.reload();
            },
            colorLight(){
                this.reload();
            }
        }
    }
</script>
<style>
    #sn-qrcode{
        display: inline-block;
    }
</style>
