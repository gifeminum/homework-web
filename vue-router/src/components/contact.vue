<template>
<div class="users">
  <div class="ui fluid container">
    <div class="ui segment" style="margin:0% 0.5% 0% 0.5%">
      <div class="ui teal segment">
        <div class="ui fluid action input">
          <div class="ui large teal ribbon label">Contacts</div>
            <input type="text" placeholder="Search..." v-model="search">
            <div class="ui button">Search</div>
            <div class="ui orange button" onclick="window.location.href = '#/newcontact';">+Add</div>
        </div>
      </div> 
      <div class="ui segment" style="height:50px"></div>

      <!-- Insert card -->
      <div class="ui segment">
        <div class="ui three column centered grid">
          <div v-for="auser in filterdUsers" v-bind:key="auser._id">
            <div class="column">
              <div class="ui link centered card" style="text-align: center ; margin:10% 0% 10% 0%">
                <div class="image">
                  <img v-bind:src=auser.imageUser>
                </div>
                <div class="content">
                  <div class="header">{{auser.firstName}} {{auser.lastName}}</div>
                  <div class="meta">
                    <i class="envelope icon"></i>
                    {{auser.email}}
                  </div>
                  <div class="meta">
                    <i class="facebook square icon"></i>
                    {{auser.facebook}}
                  </div>
                  <div class="meta">
                    <i class="phone icon"></i>
                    {{auser.phone}}
                  </div>
                </div>
                <div class="extra content">
                  <router-link :to="{ path: 'updateuser/' + auser._id}">
                    <button class="ui blue icon button">
                      <i class="edit icon"></i>
                    </button>
                  </router-link>
                  <router-link to="/users">
                    <button class="ui red icon button" @click="delUser(auser._id)">
                    <!-- <button class="ui red icon button" @click="delUser(auser.firstName)"> -->
                     <i class="eraser icon"></i>
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data () {
    return {
      title: 'User List Page',
      Users:[],
      uid:'',
      search:''
    }
  },
  methods: {
    delUser(userId){
      var url = 'http://localhost:3000/contacts/delete/' +userId
      axios.delete(url)
        .then((response)=>{
            console.log('Delete UserId: '+userId)
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload()
    },

    // delUserfirstname(firstName){
    //   var url = 'http://localhost:3000/contacts/deleteFirstname/' +firstName
    //   axios.delete(url)
    //     .then((response)=>{
    //         console.log('Delete User: '+firstName)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    //     window.location.reload()
    // },
    // DELETE(id){
    //   $('#my-modal').modal('show')
    //   this.uid = id
    // }
  },
  computed: {
    filterdUsers: function(){
      return this.Users.filter((user)=>{
        return user.firstName.match(this.search) || user.lastName.match(this.search) 
      })
    }
  },
  mounted() {
    axios.get('http://localhost:3000/contacts/getMany')
    .then((response)=>{
        //console.log(response.data)
        this.Users=response.data
    })
    .catch((error)=>{
        console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
