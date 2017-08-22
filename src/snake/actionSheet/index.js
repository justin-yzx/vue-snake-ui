/**
 * Created by mochou on 2017/8/21.
 */
import Vue from 'vue'
import actionSheetVue from './actionSheet.vue'

const Constructor = Vue.extend(actionSheetVue);
let instance;

const actionSheet= (options)=> {
  if(typeof options =='string'||typeof options =='number'){
    options={
    }
  }
  creatActionSheet(options);
}



function creatActionSheet(options) {
  if(!instance){
    instance = new Constructor({
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

  document.body.appendChild(instance.$el);
}


export default actionSheet

