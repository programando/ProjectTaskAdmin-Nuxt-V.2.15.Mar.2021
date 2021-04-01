<template>
  <div>

      Usuario autenticado <br>
      {{ user }}
<br>
          <button v-if="user.email" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"  
        @click="logout" > Cerrar sesión</button>  

      <form   v-else @submit.prevent="login"> <br>
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
  created(){ 
        this.usuarioAutenticado(); 
  },

  methods: {
        logout() {
            Users.logout()
            .then ( () => {
                this.user = {};
            })
        },
        usuarioAutenticado(){
                Users.auth() 
                .then ( response => {
                   this.user = response.data; 
                })
        },
        login() {
                Users.getCokie()
                .then ( ()=> {
                     Users.login ( this.form )
                      .then( response =>{
                        this.user = response.data;
                    }) 
                })
             }  
    }


}
</script>