<template>
    <div class="card">
        <div class="card-content">
            <div v-if="!turn || showAll">
                <h2>front</h2>
                {{ card.front }}
            </div>
            <div v-if="turn || showAll">
                <h2>back</h2>
                {{ card.back }}
            </div>
        </div>
        <div class="card-footer">
            <button type="button" class="button button-outline " v-on:click="turn = !turn">TURN</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DecksState, Deck, Card } from '../store/decks/types';

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
  text-align: center;
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