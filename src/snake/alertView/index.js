/**
 * Created by mochou on 2017/8/23.
 */
import Vue from 'vue'
import alertViewVue from './alertView.vue'

const Constructor = Vue.extend(alertViewVue);
let instance;

const alertView = (options) => {
  if (typeof options == 'string' || typeof options == 'number') {
    options = {
      msg: options,
      btn: ['确认']
    }
  }
  creatAlertView(options);
}

function creatAlertView(options) {
  if (!instance) {
    instance = new Constructor({
      el: document.createElement('div')
    });
  } else {
    instance['el'] = document.createElement('div');
  }

  if(typeof options['btn']=='string'||typeof options['btn']=='number'){
    options['btn']=[{
      str:options['btn'],
      callback:()=>{}
    }]
  }

  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop];
    }
  }

  document.body.appendChild(instance.$el);
}


export default alertView
