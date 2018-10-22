<template>
    <div class="clearfix">
        <input type="text" v-model="newDeckData.name" placeholder="Name">
        <button class="float-right" v-on:click="addNewDeck(newDeckData)">Add new card</button>
    </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex';
import { Deck, Card } from '../store/decks/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { currentUser, auth } from '../config/db';
import { UserProfileState } from '../store/userProfile/types';

@Component({
  computed: {
    ...mapState('userProfile', {
      userProfile: (state: UserProfileState) => state.userProfile,
    }),
    ...mapGetters('userProfile/isLoggedIn', ['isLoggedIn']),
  },
})
export default class AddCardFormComponent extends Vue {

    private newDeckData: Deck = {
        name: '',
        cards: [],
        uid: '',
    };

    private addNewDeck(newDeck: any) {
        if (this.$store.getters['userProfile/isLoggedIn']) {
            newDeck.uid = this.$store.state.userProfile.userProfile.uid;
            this.$store.dispatch('decks/addNewDeck', newDeck);
        }
        this.newDeckData = {
            name: '',
            cards: [],
            uid: '',
        };
    }
}
</script>
