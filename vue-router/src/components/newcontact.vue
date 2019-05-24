<template>
  <div class="ui fluid container" style="width:50%">
    <div class="ui segment">
      <div class="ui segment">
        <h2>Contact 
          <div class="ui teal label">Add</div>
        </h2>
      </div>
      <div class="ui segment">
        <form class="ui form">
          <div class="required field">
            <label>Contact ID</label>
            <input type="text" name="contact-id" 
            v-model="User.contactId" placeholder="Contact ID">
          </div>
          <div class="required field">
            <label>First Name</label>
            <input type="text" name="first-name" 
            v-model="User.firstName" placeholder="First Name">
          </div>
          <div class="required field">
            <label>Last Name</label>
            <input type="text" name="last-name" 
            v-model="User.lastName" placeholder="Last Name">
          </div>
          <div class="required field">
            <label>Mobile No</label>
            <input type="text" name="mobile-no" 
            v-model="User.phone" placeholder="Mobile No">
          </div>
          <div class="field">
            <label>Email</label>
            <input type="text" name="email" 
            v-model="User.email" placeholder="Email">
          </div>
          <div class="field">
            <label>Facebook</label>
            <input type="text" name="facebook" 
            v-model="User.facebook" placeholder="Facebook">
          </div>
          <div class="field">
            <label>Image Url</label>
            <input type="text" 
            v-model="User.imageUser" placeholder="Image Url">
          </div>
          
        </form> 
        <div class="button" style="text-align: center; margin-top:3%">
            
              <button class="ui blue basic button" @click="addToAPI" >
                  <i class="save icon"></i>
                Save</button>
            
            <button class="ui red basic button" onclick="window.location.href = '#/contact';">
              <i class="close icon"></i>
              Close</button>
        </div>   
      </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddUser',
  data () {
    return {
      title: 'Add User',
      User:{
          contactId: '',
          firstName: '',
          lastName:'',
          phone: '',
          email: '',
          facebook: '',
          imageUser: ''
      }
    }
  },
  methods: {
      addToAPI(){
          let newUser = {
              contactId: this.User.contactId,
              firstName: this.User.firstName,
              lastName: this.User.lastName,
              phone: this.User.phone,
              email: this.User.email,
              facebook: this.User.facebook,
              imageUser: this.User.imageUser,

          }
          //console.log(newUser)
          axios.post('http://localhost:3000/contacts/add',newUser)
            .then((response)=>{
                console.log(response)
                alert("success!!")
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
