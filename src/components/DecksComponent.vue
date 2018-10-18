<template>
  <div class="hello">
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Cards</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="aDeck of decks" :key="aDeck.id" v-on:click="setCurrentDeck(aDeck.id)">
                <td>{{ aDeck.name }}</td>
                <td>
                  <ul>
                    <li v-for="card of aDeck.cards">{{ card }}</li>
                  </ul>
                </td>
            </tr>
        </tbody>
    </table> 
    AAA{{ getDeckById(currentDeckId) }}AAA
    <div v-if="getDeckById(currentDeckId)">
      <cardGrid :deck="getDeckById(currentDeckId)"></cardGrid>
      <hr />
      <addCardFormComponent  :deck="getDeckById(currentDeckId)" />
    </div>
    {{ currentDeckId }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState, mapGetters } from 'vuex';
import { DeckState, Deck, Card } from '../store/decks/types';
import CardGrid from './CardGrid.vue';
import AddCardFormComponent from './AddCardFormComponent.vue';

@Component({
  computed: {
    ...mapState('decks', {
      decks: (state: DeckState) => state.decks,
      currentDeckId: (state: DeckState) => state.currentDeckId,
    }),
    ...mapGetters('decks', ['getDeckById']),
  },
  components: {
    cardGrid: CardGrid,
    addCardFormComponent: AddCardFormComponent,
  },
})
export default class DecksComponent extends Vue {
  public newCardData: Card = {front: '', back: ''};

  public setCurrentDeck(deckId: string) {
    this.$store.dispatch('decks/setCurrentDeck', deckId);
    // this.$store.dispatch('deck/currentDeckInit', deckId);
  }

  /*
  public currentDeckIsSet() {
      return Object.keys(this.currentDeck).length !== 0;
  }
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
