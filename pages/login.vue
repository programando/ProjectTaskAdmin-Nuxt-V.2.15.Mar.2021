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
 
export default {
  data: () => ( {
      user:{},
      form: {
          email : 'jhonjamesmg@hotmail.com',
          password:'password',
      }
  }),


   methods: {
    async login() {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.form.email,
          password: this.form.password,
        },
      })

     this.$router.push('home/todo')
    },
  },


}
</script>