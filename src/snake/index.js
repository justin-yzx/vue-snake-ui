/**
 * Created by mochou on 2017/8/18.
 */

import './css/snake-theme.css'

import toast from './toast'
import actionSheet from './actionSheet'
import alertView from './alertView'
import SNSwitch from './form/switch'

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

        //form
        Vue.component('SNSwitch',SNSwitch)

    }
}
