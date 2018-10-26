<template>
    <div>
        <select v-model="selected" v-on:change="setCurrentDeck(selected)">
            <option v-for="(deck, index) in decks" :key="index" v-bind:value="deck.id">
                {{ deck.name }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { DecksState, Deck } from '../store/decks/types';

@Component({
  computed: {
    ...mapState('decks', {
      decks: (state: DecksState) => state.decks,
    }),
  },
})
export default class DeckSelectorComponent extends Vue {
    public selected: string = '';

    public setCurrentDeck(deckId: string) {
        this.$store.dispatch('currentDeck/setCurrentDeck', deckId);
    }

    public mounted() {
        if (this.$store.state.currentDeck.deck) {
            this.selected = this.$store.state.currentDeck.deck.id;
        }
    }
}
</script>
