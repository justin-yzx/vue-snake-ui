<template>
    <div class="sn-date-box">
        <div @click="choosetime">
            <span v-if="!chooseDate">{{placeholder}}</span>
            <span v-if="chooseDate">{{chooseDate}}</span>
        </div>
        <div class="snake-box" style="background: rgba(0,0,0,.4)" v-show="show">
            <div class="date-picker-box" >
                <div class="date-picker-title">
                    <div class="date-btn" @click="cancel()">取消</div>
                    <div class="date-btn" @click="push()">确认</div>
                </div>
                <div class="date-box">
                    <div class="date-choose-box">
                        <div class="swiper-container" id="sn-year-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="i in yearList">{{i}}</div>
                            </div>
                        </div>
                        <div class="date-choose-box-title">年</div>
                    </div>
                    <div class="date-choose-box">
                        <div class="swiper-container" id="sn-month-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="i in monthList">{{i}}</div>
                            </div>
                        </div>
                        <div class="date-choose-box-title">月</div>
                    </div>
                    <div class="date-choose-box">
                        <div class="swiper-container" id="sn-day-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="i in dayList">{{i}}</div>
                            </div>
                        </div>
                        <div class="date-choose-box-title">日</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    const formatStr='yyyy-MM-dd'

    const getDaysInOneMonth=function(year, month){
        month = parseInt(month,10);
        var d= new Date(year,month,0);
        return d.getDate();
    }

    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    Array.prototype.indexOf = function(el){
        for (var i=0,n=this.length; i<n; i++){
            if (this[i] === el){
                return i;
            }
        }
        return -1;
    }


    export default {
        data() {
            return {
                show: false,
                yearSwiper: {},
                monthSwiper:{},
                daySwiper:{},
                yearList:[],
                monthList:[],
                dayList:[],
                year:'',
                month:'',
                day:'',
                value:new Date(),
                chooseDate:''
            }
        },
        methods: {
            choosetime() {
                this.show = true;
            },
            cancel(){
                this.show = false;
            },
            push(){
                let year=this.year;
                let month=this.month<10?'0'+this.month:this.month;
                let day=this.day<10?'0'+this.day:this.day;
                this.chooseDate=new Date(year+'-'+month+'-'+day).Format(this.format);
                this.$emit('input',this.chooseDate)
                this.cancel();
            }
        },
        mounted() {
            var dateStr=this.value;
            this.year=dateStr.getFullYear();
            this.month=dateStr.getMonth()+1;
            this.day=dateStr.getDate();
            for(var i=0;i<12;i++){
                this.monthList.push(parseInt(i+1,10));
            }
            for(var i=0;i<20;i++){
                this.yearList.push(this.year-10+i);
            }

            this.$nextTick(()=>{
                this.yearSwiper = new Swiper('#sn-year-container', {
                    direction: 'vertical',
                    slidesPerView:5,
                    loop:true,
                    centeredSlides:true,
                    speed:800,
                    initialSlide:this.yearList.indexOf(this.year),
                    observer:true,
                    observeParents:true,
                    onSlideChangeEnd: (swiper)=>{
                        this.year=this.yearList[swiper.realIndex];
                    }
                })
                this.monthSwiper = new Swiper('#sn-month-container', {
                    direction: 'vertical',
                    slidesPerView:5,
                    loop:true,
                    centeredSlides:true,
                    initialSlide:this.monthList.indexOf(this.month),
                    speed:800,
                    observer:true,
                    observeParents:true,
                    onSlideChangeEnd: (swiper)=>{
                        this.month=this.monthList[swiper.realIndex];
                    }

                })
                this.daySwiper = new Swiper('#sn-day-container', {
                    direction: 'vertical',
                    slidesPerView:5,
                    loop:true,
                    centeredSlides:true,
                    initialSlide:this.dayList.indexOf(this.day),
                    speed:800,
                    observer:true,
                    observeParents:true,
                    onSlideChangeEnd: (swiper)=>{
                        this.day=this.dayList[swiper.realIndex];
                    }
                })
            })
        },
        props: {
            placeholder:{
                default:'请选择时间',
            },
            format:{
                default:formatStr,
            }
        },
        watch: {
            month(){
                var days=getDaysInOneMonth(this.year,this.month);
                var dayArr=[];
                let day=this.day;
                for(var i=1;i<=days;i++){
                    dayArr.push(i);
                }
                this.dayList=dayArr;

                this.$nextTick(()=>{
                    this.daySwiper.init();
                })
            }
        }
    }
</script>
<style>
    .swiper-slide{
        line-height: 34px;
    }
    .swiper-slide-active{
        color: red;
    }
    .sn-date-box{
        display: inline-block;
        cursor: pointer;
    }
</style>
