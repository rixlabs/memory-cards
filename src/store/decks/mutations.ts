import { MutationTree } from 'vuex';
import { DecksState, Deck } from './types';

export const mutations: MutationTree<DecksState> = {
    SET_DECKS(state: any, val: any) {
        if (val) {
          state.decks = val;
        } else {
          state.decks = [];
        }
      },
      ADD_DECK(state: any, deck: any) {
        state.decks.push(deck);
      },
      SET_CURRENT_DECK(state: any, deckId: string) {
        state.currentDeckId = deckId;
      },
      CLEAR_STATE(state: any) {
        state.decks = [];
        state.currentDeck = {};
      },
};
