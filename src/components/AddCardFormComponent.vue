<template>
    <div>
        <input type="text" v-model="newCardData.front" placeholder="Front">
        <input type="text" v-model="newCardData.back" placeholder="Back">
        <button  v-on:click="addNewCardToCurrentDeck(newCardData)">Add new card</button>
    </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { Deck, Card } from '../store/decks/types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddCardFormComponent extends Vue {
    @Prop() private deck!: Deck;

    private newCardData: any = {};

    private addNewCardToCurrentDeck(newCardData: any) {
        this.$store.dispatch('currentDeck/addCardToCurrentDeck', {deckId: this.deck.id, data: newCardData});
        this.newCardData = {};
    }
}
</script>
