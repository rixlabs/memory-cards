<template>
  <div class="hello">
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
    <div v-if="currentDeck">
      <cardGrid :deck="currentDeck"></cardGrid>
      <hr />
      <addCardFormComponent  :deck="currentDeck" />
    </div>
    aaa{{ currentDeck }}aaa
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState, mapGetters } from 'vuex';
import { DecksState, Deck, Card } from '../store/decks/types';
import { CurrentDeckState } from '../store/currentDeck/types';
import CardGrid from './CardGrid.vue';
import AddCardFormComponent from './AddCardFormComponent.vue';

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
  },
})
export default class DecksComponent extends Vue {
  public newCardData: Card = {front: '', back: ''};

  public setCurrentDeck(deckId: string) {
    this.$store.dispatch('currentDeck/setCurrentDeck', deckId);
  }
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
