<template>
    <div class="container">
        <div class="gridContainer">
            <card v-for="card of deck.cards" :key="deck.cards.indexOf(card)" :card="card"></card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardComponent from './CardComponent.vue';
import { DecksState, Deck, Card } from '../store/decks/types';

@Component({
  components: {
        card: CardComponent,
    },
})
export default class CardGrid extends Vue {
    @Prop() private deck!: Deck;
}

</script>
<style>
.gridContainer {
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  min-height: calc(100vh - var(--spacing)*2);
}
</style>