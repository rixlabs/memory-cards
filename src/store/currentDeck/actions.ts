import { Deck } from './../decks/types';
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { decksCollection } from '../../config/db';
import { CurrentDeckState } from './types';


export const actions: ActionTree<CurrentDeckState, RootState> = {
    setCurrentDeck({ commit }, deckId: string) {
        decksCollection.doc(deckId).onSnapshot((doc: any) => {
            commit('SET_CURRENT_DECK', { id: deckId, ...doc.data() });
        });
    },
    addCardToCurrentDeck({ commit }, newCard: any) {
        decksCollection.doc(newCard.deckId).get().then((deck: any) => {
            const cardsRef = deck.data().cards;
            const newCards = JSON.parse(JSON.stringify(cardsRef));
            newCards.push(newCard.data);
            decksCollection.doc(newCard.deckId).update({ cards: newCards }).catch((err) => undefined);
        });
    },
};
