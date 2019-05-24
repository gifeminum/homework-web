import Vue from 'vue'
import Router from 'vue-router'
import contact from '@/components/contact'
import login from '@/components/login'
import newcontact from '@/components/newcontact'
import updateuser from '@/components/updateuser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/newcontact',
      name: 'newcontact',
      component: newcontact
    },
    {
      path: '/updateuser/:userId',
      name: 'updateuser',
      component: updateuser
    }
  ]
})
