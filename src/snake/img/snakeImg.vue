<template>
    <div>
        <img :src="src" alt="" class="sn-img" @click="show">

        <div class="imgbox" v-if="isshow" :style="{ width: getwidth+'px', height: getheight + 'px' }">
            <div class="swiper-container swiper-img" @click="hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="isrc in imglist">
                        <div class="img-list" :style="{ width: getwidth+'px' , lineHeight:getheight+'px'}">
                            <img :src="isrc" alt="">
                        </div>
                    </div>
                </div>
                <div class="sn-page">{{this.swiperobj.activeIndex+1}}/{{imgvuelist.length}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    export default {
        data() {
            return {
                name: 'snake-img',
                imglist: [],
                imgvuelist:[],
                isfirsttap: false,
                isshow: false,
                htmlheight: '',
                bodyheight: '',
                swiperobj: {}
            }
        },
        methods: {
            show() {
                if (!this.isfirsttap) {
                    this.isfirsttap = true;
                    var childrens = this.$parent.$children;
                    for (var i = 0; i < childrens.length; i++) {
                        if (childrens[i]['name'] == 'snake-img') {
                            this.imglist.push(childrens[i]['src']);
                            this.imgvuelist.push(childrens[i]);
                        }
                    }

                }


                this.isshow = true;
                this.$nextTick(() => {
                    this.swiperobj = new Swiper('.swiper-img', {
                        initialSlide:this.imgvuelist.indexOf(this),
                    })
                })
            },
            hidden() {
                this.isshow = false;
            }
        },
        computed: {
            getwidth() {
                return window.screen.width;
            },
            getheight() {
                return document.body.clientHeight;
            }
        },
        mounted() {
            this.htmlheight = document.getElementsByTagName('html')[0].style.height;
            this.bodyheight = document.getElementsByTagName('body')[0].style.height;
        },
        props: {
            src: ''
        },
        watch: {
            isshow() {
                if (this.isshow) {
                    document.getElementsByTagName('html')[0].style.height = '100%';
                    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
                    document.getElementsByTagName('body')[0].style.height = '100%';
                } else {
                    document.getElementsByTagName('html')[0].style.height = this.htmlheight;
                    document.getElementsByTagName('html')[0].style.overflow = 'visible';
                    document.getElementsByTagName('body')[0].style.height = this.bodyheight;
                }
            }
        }
    }
</script>
<style>
    .sn-img {
        width: 100%;
        display: block;
    }

    .imgbox {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20000;
        background: black;
    }

    .img-list {
        float: left;
        height: 100%;
        position: relative;
        line-height: 100%;
    }

    .img-list > img {
        width: 100%;
        display: inline-block;
        vertical-align: middle;
    }
    .sn-page{
        position: absolute;
        color: white;
        bottom: 20px;
        left: 10px;
    }
</style>
