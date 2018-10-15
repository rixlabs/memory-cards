<template>
  <div id="app">
    <div class="container">
      <div class="float-right">
        <div v-if="isLoggedIn()">{{ userAuth.displayName }} <small v-on:click="signOut()" icon="sign-out-alt"> | logout</small></div>
        <button v-if="!isLoggedIn()"  v-on:click="signiIn()">SignIn</button>
      </div>
    </div>
    
    <div class="container" v-if="isLoggedIn()">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/exercise">Exercise</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import firebase from 'firebase';
import { auth, authProvider } from './config/db';
import _ from 'lodash';

@Component
export default class App extends Vue {
  private userAuth: any = {};
  private signiIn( ) {
      auth.signInWithRedirect(authProvider);
  }

  private signOut() {
    auth.signOut().then(() => {
      this.$store.dispatch('deck/clear');
      this.userAuth = {};
    }).catch((error) => {
      // An error happened.
    });
  }

  private isLoggedIn(user: any) {
    return _.has(this.userAuth, 'displayName');
  }

  private beforeCreate() {
    auth.getRedirectResult().then((result) => {
      // The signed-in user info.
      const authUser = result.user;
      this.userAuth = authUser;
      // this.$store.dispatch('user/currentUserInit', _.clone(authUser));
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });

    auth.onAuthStateChanged((userAuth) => {
      this.userAuth = userAuth;
    });

    this.$store.dispatch('deck/init');
  }
}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style lang="css">
  @import '../node_modules/milligram/dist/milligram.min.css';
</style>
