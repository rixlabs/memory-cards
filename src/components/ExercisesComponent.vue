<template>
    <div>
        <select v-model="selectedDeck" v-on:change="setCurrentDeck(selectedDeck)">
            <option v-for="(deck, index) in decks" :key="index" v-bind:value="deck.id">
                {{ deck.name }}
            </option>
        </select>
        <span>selectedDeck: {{ selectedDeck }}</span>
        <table>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-on:click="selectExercise('oneRandom')">
                    <td>1 Random</td>
                    <td>Cycle through all card in a deck in random order and random face</td>
                </tr>
            </tbody>
        </table>
        <oneRandomComponent :key="componentKey" v-if="selecteExercise === 'oneRandom'"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DeckSelectorComponent from './DeckSelectorComponent.vue';
import OneRandomComponent from '@/components/exercises/OneRandomComponent.vue';
import { mapState } from 'vuex';
import { DecksState, Deck } from '../store/decks/types';

@Component({
    components: {
    deckSelectorComponent: DeckSelectorComponent,
    oneRandomComponent: OneRandomComponent,
  },
  computed: {
    ...mapState('decks', {
      decks: (state: DecksState) => state.decks,
    }),
  },
})
export default class ExercisesComponent extends Vue {
    public selecteExercise: string = '';
    public componentKey: string = '';
    public selectedDeck: string = '';

    public selectExercise(selected: string) {
        this.componentKey = new Date().toTimeString();
        this.selecteExercise = selected;
    }

    public setCurrentDeck(deckId: string) {
        this.$store.dispatch('currentDeck/setCurrentDeck', deckId);
        this.clearExercise();
    }

    private clearExercise() {
        this.selecteExercise = '';
    }
}
</script>
