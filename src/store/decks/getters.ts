import { GetterTree } from 'vuex';
import { DeckState, Deck } from './types';
import { RootState } from '../types';

export const getters: GetterTree<DeckState, RootState> = {
    getDeckById: (state) => (deckId: string) => {
        return state.decks.find((deck) => deck.id === deckId);
    },
};
