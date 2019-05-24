<template>
  <div class="ui fluid container" style="width:35%">
    <div class="ui segment" style="margin:0% 0.5% 0% 0.5%">
        <div class="ui teal segment">
            <div class="ui fluid action input">
                <div class="ui large teal ribbon label">Login</div>
            </div>
        </div>
        <form class="ui form">
            <div class="field">
                <label>User Account</label>
                <input type="text" name="username"
                v-model="User.userName" placeholder="Username">
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" name="password" 
                v-model="User.passWord" placeholder="Password">
            </div>   
        </form>
    <button class="ui button" type="submit" @click="login" style="margin-top:5%">Login</button>
    </div>
    <p>Username: admin <br>Password: admin</p>
  </div>
</template>

<script>
import axios from 'axios'
// import router from '../router'
export default {
  name: 'Login',
  data () {
    return {
      title: 'Login',
      User:{
        userName:'',
        passWord:''
      }
    }
  },
  methods: {
    login(){
      axios.get('http://localhost:3000/login/'+ this.User.userName)
        .then((response)=>{
          console.log(response.data)
            if(this.User.userName != "" && this.User.passWord != ""){
            if(this.User.userName == response.data.userName &&
            this.User.passWord == response.data.passWord){
              console.log('sucess!')
              // router.push({name: 'contact'})
              this.$router.replace('/contact')
            }else{
              alert("password is incorrect")
              this.$router.replace('/')
              
            }
          }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>