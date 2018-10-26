<template>
    <div class="clearfix">

        <cardComponent v-if="shuffledDeck.length > 0" :card="shuffledDeck[cardIndex]" />
            <div class="controls">
                <button v-on:click="previousCard()">Previous</button> <button v-on:click="nextCard()">Next</button>
            </div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardComponent from '../CardComponent.vue';
import { mapState, mapGetters } from 'vuex';
import { CurrentDeckState } from '../../store/currentDeck/types';
import { List } from 'immutable';
import _ from 'lodash';
import { Deck, Card } from '../../store/decks/types';

@Component({
    components: {
        cardComponent: CardComponent,
    },
    computed: {
        ...mapState('currentDeck', {
            currentDeck: (state: CurrentDeckState) => state.deck,
        }),
        ...mapGetters('currentDeck', ['getShuffledCards']),
    },
})
export default class OneRandomComponent extends Vue {
    public cardIndex: number = 0;
    public shuffledDeck: Card[] = [];

    public mounted() {
        this.shuffledDeck = this.$store.getters['currentDeck/getShuffledCards'];
    }

    public nextCard() {
        if (this.cardIndex < this.shuffledDeck.length - 1) {
            this.cardIndex++;
        }
    }

    public previousCard() {
        if (this.cardIndex > 0) {
            this.cardIndex--;
        }
    }
    // this.$store.getters['getShuffledCards'];
}
</script>

<style>
.controls {
    margin-top: 5px;
    text-align: center;
}

.controls button {
    margin:2px;
}

</style>
