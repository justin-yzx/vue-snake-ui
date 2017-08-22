/**
 * Created by mochou on 2017/8/18.
 */

import Vue from 'vue'
import toastVue from './toast.vue'

const toastConstructor = Vue.extend(toastVue);
let instance;
const toast= (options)=> {
  if(typeof options =='string'||typeof options =='number'){
    options={
      msg:options,
      type:'msg'
    }
  }
  creatToast(options)
}

toast.success=(options)=>{
  options?options:options={};
  if(typeof options =='string'||typeof options =='number'){
    options={
      successmsg:options,
    }
  }
  options.type='success';
  creatToast(options)
}

toast.error=(options)=>{
  options?options:options={};
  if(typeof options =='string'||typeof options =='number'){
    options={
      errormsg:options,
    }
  }
  options.type='error';
  creatToast(options)
}


toast.loading=(options)=>{
  options?options:options={};
  if(typeof options =='string'||typeof options =='number'){
    options={
      loadingmsg:options,
    }
  }
  options.type='loading';
  creatToast(options)
}

toast.loading.show=()=>{
  let options={type:'loading'};
  creatToast(options)
}

toast.loading.hide=(options)=>{
  options?options:options={};
  instance.hide();
}



function creatToast(options) {
  if(!instance){
    instance = new toastConstructor({
      el: document.createElement('div')
    });
  }else {
    instance['el']=document.createElement('div');
  }


  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop];
    }
  }

  if(instance['type']!='loading'){
    instance['remain']=options['remain']?options['remain']:1
  }

  if(instance['type']=='loading'){
    instance['remain']=10;
  }

  instance.remove();
  document.body.appendChild(instance.$el);
}



export default toast
export {toast}
