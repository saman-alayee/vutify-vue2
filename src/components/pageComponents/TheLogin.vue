<template>
  <div class="background-container">
    <v-container>
      <v-card
        color="white"
        elevation="1"
        class="mx-auto my-12"
        max-width="480"
        shaped
      >
        <v-card-title class="white--text red darken-2">login </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="nameRules"
              label="password"
              required
            ></v-text-field>


            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="i am not robot"
              required
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              min-width="100%"
              color="blue darken-4"
              dark
              @click="validate"
            >
              Login
            </v-btn>
            <v-spacer></v-spacer>
            <div class="app-color-blue text-center mt-5">
              <router-link to="/">dont have a account? sign in </router-link>
            </div>
          </v-form></v-card-text
        >
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    password: "",
    nameRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
         axios
          .post(`https://reqres.in/api/register/`, {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            // this.$store.commit("login/login", response.data.token);
            // this.$router.push("/home");
            console.log(response)

          })
          .catch();
      
    },
  },
};
</script>
<style lang="scss" scoped>
.background-container {
  background-image: url("@/assets/images/login-img.jpg");
  height: 675px;
}
</style>

