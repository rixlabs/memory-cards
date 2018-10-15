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
      <addCardFormComponent :deck="currentDeck" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { DeckState, Deck, Card } from '../store/deck/types';
import CardGrid from './CardGrid.vue';
import AddCardFormComponent from './AddCardFormComponent.vue';

@Component({
  computed: {
    ...mapState('deck', {
      decks: (state: DeckState) => state.decks,
      currentDeck: (state: DeckState) => state.currentDeck,
    }),
  },
  components: {
    cardGrid: CardGrid,
    addCardFormComponent: AddCardFormComponent,
  },
})
export default class DecksComponent extends Vue {
  public newCardData: Card = {front: '', back: ''};
  @Prop() private msg!: string;

  public setCurrentDeck(deckId: string) {
      this.$store.dispatch('deck/currentDeckInit', deckId);
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
