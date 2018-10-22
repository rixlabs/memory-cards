<template>
    <div class="container">
        <div v-if="currentDeck">
            <h1>{{ currentDeck.name }}</h1>
            <div v-if="currentDeck.cards.length > 0" class="gridContainer">
                <card v-for="card of currentDeck.cards" :key="currentDeck.cards.indexOf(card)" :card="card"></card>
            </div>
            <hr/>
            <addCardFormComponent :deck="currentDeck" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardComponent from './CardComponent.vue';
import { DecksState, Deck, Card } from '../store/decks/types';
import { mapActions, mapState, mapGetters } from 'vuex';
import { CurrentDeckState } from '../store/currentDeck/types';
import AddCardFormComponent from '@/components/AddCardFormComponent.vue';

@Component({
    components: {
        card: CardComponent,
        addCardFormComponent: AddCardFormComponent,
    },
    computed: {
        ...mapState('currentDeck', {
            currentDeck: (state: CurrentDeckState) => state.deck,
        }),
    },
})
export default class CardGrid extends Vue {
    @Prop() public uid!: string;

    private beforeMount() {
        if (!this.$store.state.currentDeck.currentDeck && this.uid) {
            this.$store.dispatch('currentDeck/setCurrentDeck', this.uid);
        }
    }
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