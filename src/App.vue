<template>
  <div id="app">
    <div class="container" >
      <div class="float-right">
        <div v-if="userAuth">{{ userAuth.displayName }}<small v-on:click="signOut()" icon="sign-out-alt"> {{ userAuth.uid}} | logout</small></div>
        <button v-if="!isLoggedIn(userAuth)"  v-on:click="signiIn()">SignIn</button>
      </div>
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
import { UserProfileState } from './store/userProfile/types';
import _ from 'lodash';

@Component({
  computed: {
    ...mapState('userProfile', {
      userProfile: (state: UserProfileState) => state.userProfile,
    }),
  },
})
export default class App extends Vue {
  public userAuth: any = { displayName: ''};
  public signiIn( ) {
      auth.signInWithRedirect(authProvider);
  }

  public signOut() {
    auth.signOut().then(() => {
      this.$store.dispatch('deck/clear');
      this.userAuth = {};
    }).catch((error) => {
      // An error happened.
    });
  }

  public isLoggedIn(user: any) {
    return _.has(this.userAuth, 'displayName');
  }

  private beforeCreate() {
    auth.getRedirectResult().then((result) => {
      // The signed-in user info.
      const authUser = result.user;
      this.userAuth = authUser;
      if (authUser) {
        this.$store.dispatch('userProfile/setCurrentUser', {
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
        });
      }
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
      if (userAuth) {
        this.$store.dispatch('userProfile/setCurrentUser', {
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          email: userAuth.email,
        });
      }
    });

    this.$store.dispatch('decks/init');
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
