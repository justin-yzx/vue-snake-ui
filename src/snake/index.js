/**
 * Created by mochou on 2017/8/18.
 */

import './css/snake-theme.css'

import toast from './toast'
import actionSheet from './actionSheet'
import alertView from './alertView'
import SNSwitch from './form/switch'

import SNDatePicker from './form/datePicker'

import SNCheckBox from './form/checkBox'

import SNRadio from './form/radio'

import SNButton from './button/button'

import SNButtonTab from './buttonTab/buttonTab'
import SNButtonTabItem from './buttonTab/buttonTabItem'

import SNImg from './img/snakeImg'

import SNQrcode from './qrcode/qrcode.vue'


const components={
    SNSwitch,
    SNDatePicker,
    SNCheckBox,
    SNButton,
    SNRadio,
    SNButtonTab,
    SNButtonTabItem,
    SNImg,
    SNQrcode
}


export default{
    install(Vue){
        //toast提示
        Vue.prototype.SNToast = toast;
        Vue.prototype.SNToast.success = toast.success;
        Vue.prototype.SNToast.error = toast.error;
        Vue.prototype.SNToast.loading = toast.loading;

        //actionSheet
        Vue.prototype.SNActionSheet = actionSheet;

        //alertView
        Vue.prototype.SNAlert = alertView;

        //components
        for(let key in components){
            Vue.component(key,components[key]);
        }

    }
}


