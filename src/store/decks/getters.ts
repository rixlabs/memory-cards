import { GetterTree } from 'vuex';
import { DecksState, Deck } from './types';
import { RootState } from '../types';

export const getters: GetterTree<DecksState, RootState> = {
    getDeckById: (state) => (deckId: string) => {
        return state.decks.find((deck) => deck.id === deckId);
    },
};
