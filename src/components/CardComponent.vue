<template>
    <div class="card">
        <div class="card-content">
            <h2 v-if="!turn || showAll">front: {{ card.front }}</h2>
            <h2 v-if="turn || showAll">back: {{ card.back }}</h2>
        </div>
        <div class="card-footer">
            <button type="button" class="button button-outline " v-on:click="turn = !turn">TURN</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DeckState, Deck, Card } from '../store/decks/types';

@Component
export default class CardComponent extends Vue {
    @Prop() private card!: Card;

    private turn: boolean = false;
    private showAll: boolean = false;
}
</script>
<style>
.card {
  height: 250px;
  border: 1px solid gray;
  border-radius: 4px;
}
.card-content {
  height: 200px;  
}
.card-footer {
  margin: 0;
  padding-top: 5px;
  height: 40px;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  background: #fafafa;
  border-top: 1px solid #eeeeee;
  z-index: 99;
}
</style>