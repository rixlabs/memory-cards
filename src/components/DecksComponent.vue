<template>
  <div>
    <h1>All Decks </h1><a v-show="!showDeckForm" v-on:click="showDeckForm = true">add</a>
    <div class="clearfix">
      <span class="float-right" v-show="showDeckForm" v-on:click="showDeckForm = false">close X</span>
      <addDeckComponent v-if="showDeckForm" />
    </div>
    <table>
        <thead>
            <tr>
            <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="aDeck of decks" :key="aDeck.id" v-on:click="setCurrentDeck(aDeck.id)">
                <td>{{ aDeck.name }}</td>
            </tr>
        </tbody>
    </table> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState, mapGetters } from 'vuex';
import { DecksState, Deck, Card } from '../store/decks/types';
import { CurrentDeckState } from '../store/currentDeck/types';
import CardGrid from './CardGrid.vue';
import AddCardFormComponent from './AddCardFormComponent.vue';
import AddDeckComponent from './AddDeckFormComponent.vue';

@Component({
  computed: {
    ...mapState('decks', {
      decks: (state: DecksState) => state.decks,
      currentDeckId: (state: DecksState) => state.currentDeckId,
    }),
    ...mapState('currentDeck', {
      currentDeck: (state: CurrentDeckState) => state.deck,
    }),
    ...mapGetters('decks', ['getDeckById']),
  },
  components: {
    cardGrid: CardGrid,
    addCardFormComponent: AddCardFormComponent,
    addDeckComponent: AddDeckComponent,
  },
})
export default class DecksComponent extends Vue {
  public newCardData: Card = {front: '', back: ''};
  public showDeckForm: boolean = false;

  public setCurrentDeck(deckId: string) {
    this.$store.dispatch('currentDeck/setCurrentDeck', deckId);
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'currentDeck/SET_CURRENT_DECK') {
        this.$router.push({ name: 'deck', params: { uid: deckId }});
      }
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display: inline;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
