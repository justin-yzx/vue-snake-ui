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
<<<<<<< HEAD
import SNRadio from './form/radio'
=======
import SNButton from './button/button.vue'


const components={
    SNSwitch,
    SNDatePicker,
    SNCheckBox,
    SNButton,
}


>>>>>>> f4ae01fcf7575e64c0fc672ee29d299df17d03b8
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

<<<<<<< HEAD
        //form
        Vue.component('SNSwitch',SNSwitch)
        Vue.component('SNCheckBox',SNCheckBox)
        Vue.component('SNRadio',SNRadio)
=======
        //components
        for(let key in components){
            Vue.component(key,components[key]);
        }

>>>>>>> f4ae01fcf7575e64c0fc672ee29d299df17d03b8
    }
}


