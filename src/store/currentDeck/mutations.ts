import { Deck } from './../decks/types';
import { MutationTree } from 'vuex';
import { CurrentDeckState } from './types';

export const mutations: MutationTree<CurrentDeckState> = {
    SET_CURRENT_DECK(state: any, deck: Deck) {
        state.deck = deck;
    },
};
