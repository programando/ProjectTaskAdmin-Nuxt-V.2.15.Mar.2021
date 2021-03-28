<template>
  <div>
      Usuario autenticado
      {{ user }}
      <form @submit.prevent="login"> <br>
          <input  v-model="form.email" type="email" placeholder="email"> <br>
          <input  v-model="form.password" type="password" placeholder="password"><br>
          <button > Login</button>
      </form>
  </div>
</template>

<script>
import Users from "@/models/User";
export default {
  data: () => ( {
      user:{},
      form: {
          email : 'jhonjamesmg@hotmail.com',
          password:'password',
      }
  }),
 
  methods: {
        login() {
            Users.login ( this.form )
            .then( response =>{
                console.log(  response);
            })
            
        }
  },  


}
</script>