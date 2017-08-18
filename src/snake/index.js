/**
 * Created by mochou on 2017/8/18.
 */

import toast from './toast'

export default{
  install(Vue){
    //toast提示
    Vue.prototype.SNToast = toast;
    Vue.prototype.SNSuccess =toast.success;
    Vue.prototype.SNError =toast.error;
    Vue.prototype.SNLoading =toast.loading;
  }
}
